// #region Imports & Setup
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const fs = require('fs');

if (process.env.URI) {
  uri = process.env.URI;
}
else {
  const configData = fs.readFileSync('../config.json', 'utf-8');
  const config = JSON.parse(configData);
  uri = config.uri;
}


const app = express(); // creates app for server's client
const chalk = require('chalk'); // console colors
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const { MongoClient, ServerApiVersion } = require('mongodb');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json()); // Express modules / packages
app.use(bodyParser.urlencoded({
  extended: true
})); // Express modules / packages

secretKey = crypto.randomBytes(64).toString('hex');
app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));
app.use(express.static('views')); // load the files that are in the views directory
// #endregion

// #region Database Stuff


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

db = client.db("ppsbathrooms");
dataColl = db.collection("data");
userColl = db.collection("users");

client.connect()
  .then(() => {
    console.error(chalk.green('connected to database'));
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });

//updates bathroom data

async function setBrData(school, value, request) {
  try {
    doc = await dataColl.findOne({ _id: 'schoolData' });
    doc = doc.value;

    chs = doc[0];
    fhs = doc[1];
    ihs = doc[2];

    switch(school) {
      case 'chs':
        chs = value;
        break;
      case 'fhs':
        fhs = value;
        break;
      case 'ihs':
        ihs = value;
        break;
    }

    newValue = [chs, fhs, ihs]
    numDiff = numDiffCharacters(newValue, doc)
    if(numDiff > 0) {
      dbEntry(request, 'bathrooms', value, school, numDiff)
    }
    await updateBrs(newValue);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



async function updateBrs(newValue) {
  brUpdated();
  try {
    await client.connect();
    await dataColl.updateOne({ _id: "schoolData" }, { $set: {value: newValue }}, {});
    // await client.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// #endregion

// #region Pages
// Bathrooms
app.get('/', async (req, res) => {
  try {
    doc = await dataColl.findOne({ _id: 'schoolData' });
    doc = doc.value;

    const dataToSendToClient = {
      brData: doc,
      school: null
    };
    pageVisited();
    res.render('html/home', { data: dataToSendToClient });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/cleveland', async (req, res) => {
  try {
    doc = await dataColl.findOne({ _id: 'schoolData' });
    doc = doc.value;

    const dataToSendToClient = {
      brData: doc,
      school: 'chs'
    };
    pageVisited();
    res.render('html/home', { data: dataToSendToClient });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/franklin', async (req, res) => {
  try {
    doc = await dataColl.findOne({ _id: 'schoolData' });
    doc = doc.value;
    
    const dataToSendToClient = {
      brData: doc,
      school: 'fhs'
    };
    pageVisited();
    res.render('html/home', { data: dataToSendToClient });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/ida', async (req, res) => {
  try {
    doc = await dataColl.findOne({ _id: 'schoolData' });
    doc = doc.value;
    
    const dataToSendToClient = {
      brData: doc,
      school: 'ihs'
    };
    pageVisited();
    res.render('html/home', { data: dataToSendToClient });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/help', (req, res) => {
  res.render('html/help.html');
  pageVisited();
});

app.get('/contact', (req, res) => {
  res.render('html/contact.html');
  pageVisited();
});

app.get('/privacy', (req, res) => {
  res.render('html/privacy.html');
  pageVisited();
});

app.get('/terms', (req, res) => {
  res.render('html/terms.html');
  pageVisited();
});

app.get('/schools', (req, res) => {
  res.render('html/schools.html');
  pageVisited();
});

  app.get('/admin', async (req, res) => {
  if(!req.session.authenticated) {
    res.sendFile(__dirname + '/views/html/admin/login.html');
  }
  else {
// #region admin data
    const brData = await db.collection('data').findOne({ _id: 'schoolData'});

    const brUpdates = await db.collection('bathrooms').find({}).toArray();
    const formattedBrUpdates = brUpdates.reverse().map(entry => `${entry.time} ${' | '} ${entry.school} ${entry.numChanged} ${' bathrooms updated'}`).join('<br>');

    const feedback = await db.collection('feedback').find({}).toArray();
    const formattedFeedback = feedback.reverse().map(entry => `${entry.time} ${' | '} ${entry.value}`).join('<br>');

    const adminData = await db.collection('adminlogins').find({}).toArray();
    const formattedAdminData = adminData.reverse().map(entry => `${entry.time} ${' | '} ${entry.ip}`).join('<br>');
// #endregion
    let dataToSend = {
      navItems: ['Logs', 'Schools', 'Dashboard'],
      feedback: formattedFeedback,
      brUpdates: formattedBrUpdates,
      styleData: await readFile('admin/adminStyle.css'),
      username: req.session.username,
      schoolData: brData,
      schoolJs: await readFile('admin/inserts/schoolJs.js'),
    };

    if (req.session.userAccess === '0') {
      dataToSend.navItems = ['Logs', 'Schools', 'Dashboard', 'Admin']
      dataToSend.adminData = formattedAdminData;
    }
    
    fs.readFile('admin/admindash.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Internal server error');
      } else {
        const modifiedHTML = injectDataIntoHTML(data, dataToSend);

        res.send(modifiedHTML);
      }
    });
  }
});

//admin info
app.get('/pageVisits', async (req, res) => {
  if (req.session.authenticated) {
    try {
      await client.connect();
      const db = client.db('ppsbathrooms');
      const collection = db.collection('pageVisits');

      const visits = await collection.find().toArray();

      res.send(visits);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.render('html/404.html');
  }
});

app.get('/admin/logout', (req, res) => {
  req.session.authenticated = false;
  res.redirect('/');
});

//404 keep at end of redirects
app.get('*', (req, res) => {
  res.status(404).render('html/404.html', {});
});

// #endregion

// #region Posts

app.post('/admin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userColl.findOne({ username });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        req.session.authenticated = true;
        req.session.userAccess = user.access;
        req.session.username = user.username;
        res.json({ accessDenied: false});
      } else {
        res.json({ accessDenied: true});
      }
    } else {
        res.json({ accessDenied: true});
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//recieve post request, send update
app.post('/updatePassword', async function(req, res) {
  school = req.body.school;
  currentPass = req.body.currentPass;
  newPass = req.body.newPass;

  actualPass = await db.collection('data').findOne({ _id: school + 'Pass'});

  if(currentPass == actualPass.password) {
    res.json({ isCorrect: true});
    await db.collection('data').updateOne(
      {"_id": school + 'Pass'},
      {$set : {'password': newPass}}
      );
      console.log(chalk.white(`${school} password changed: ${currentPass} => ${newPass}`))
  }
  else {
    res.json({ isCorrect: false});
  }

});

app.post('/bathroomUpdate', async function(req, res) {
  try {
    var values = req.body.values;
    var school = req.body.school;
    var providedPassword = req.body.confirmation;

    var schoolData = await db.collection('data').findOne({ _id: school + 'Pass' });

    if (!schoolData || !schoolData.password) {
      console.log("Invalid request or password not found for school: ", school);
    }

    var neededPassword = schoolData.password;

    if (req.session.authenticated && providedPassword === 'c2fRCdYotZ') {
      res.json({ isCorrect: true });
      setBrData(school, values, req);
    } else {
      if (neededPassword && providedPassword.toLowerCase() === neededPassword.toLowerCase()) {
        values = values.toString().replace(/[\n\r\s]/g, '');
        res.json({ isCorrect: true });
        setBrData(school, values, req);
      } else {
        res.json({ isCorrect: false, error: "Incorrect password" });
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
});


app.post('/sendFeedback', function(req, res) {
  dbEntry(req, 'feedback', req.body.feedback)
});

function injectDataIntoHTML(htmlContent, data) {
  const defaultDir = 'Logs'
  let adminLogins;
  let navbar = '';
  let allNavItems = '';
  let allNavItemsFull = '';
  const totalNavItems = data.navItems.length;

  data.navItems.forEach((str, index) => {
    const navItems = '#' + str.toLowerCase() + (index !== totalNavItems - 1 ? ', ' : '');
    const navItemsFull = '#navbar' + str + (index !== totalNavItems - 1 ? ',' : '');

    allNavItems += navItems;
    allNavItemsFull += navItemsFull;
  });

  schoolJsInsert = data.schoolJs ? data.schoolJs : '';

  let navbarJs = 
  `dir = '` + defaultDir + `'
      function hideAllPannels() {
        $('` + allNavItems + `').hide();
        $('` + allNavItemsFull + `').removeClass("selected");
      }`;

  data.navItems.forEach((str) => {
    let htmlClass = '';
    if(str == defaultDir) {
      htmlClass = 'class="selected"'
    }
    const htmlCode = `
        <button id="navbar${str}" ` + htmlClass + `>
            <img id="icon16" src="style/icons/${str.toLowerCase()}.svg">
            <p>${str}</p>
        </button>
    `;

    const navbarJsInsert = `
      $('#navbar${str}').click(function (e) {
          if (dir != '${str}') {
              dir = '${str}';
              hideAllPannels();
              $('#navbar${str}').addClass("selected");
              $('#${str.toLowerCase()}').fadeIn(50);
          }
      });
    `;
    navbar += htmlCode;
    navbarJs += navbarJsInsert;
  });

  chsData = data.schoolData.value[0]
  fhsData = data.schoolData.value[1]
  ihsData = data.schoolData.value[2]
  
  if(data.adminData) {
    adminLogins = 
      `<h3>admin logins</h3>
      <div class="txtDisplay">
          ` + data.adminData + `
      </div><br>`
  } else {
    adminLogins = '';
  }
  const modifiedHTML = htmlContent
    .replace('{{logs}}',
      `<div id="logsPannel">
          <div id="leftColumn">
              <div>
                  <h3 style="display: inline-block">bathroom updates</h3>
              </div>
              <div class="txtDisplay">
                  ` + data.brUpdates + `
              </div><br>
              ` + adminLogins + `
          </div>
          <div id="feedbackPannel">
              <h3>feedback</h3>
              <div class="txtDisplay">
                  ` + data.feedback + `
              </div>
          </div>
      </div>`
    )
    .replace('{{style}}', '<style>' + data.styleData + '</style>')
    .replace('{{username}}', data.username)
    .replace('{{navbar}}', navbar)
    .replace('{{navbarJs}}', '<script>' + navbarJs + '</script>')
    .replace('{{schoolJs}}', '<script>' + schoolJsInsert + '</script>')
    .replace('{{brData}}', 
    `<div style="display: none">
      <p id="chsData">${chsData}</p>
      <p id="fhsData">${fhsData}</p>
      <p id="ihsData">${ihsData}</p>
    </div>`
    )
  return modifiedHTML;
}

async function dbEntry(request, collectionName, value, school, numChanged) {
    try {
        await client.connect();
        const collection = db.collection(collectionName);
        const dbentry = {
            time: dateTime(),
            ip: request.headers['x-forwarded-for'] || request.socket.remoteAddress
        };
        if (school) {
            dbentry.school = school;
        }
        if(value) {
          dbentry.value = value;
        }     
        if(numChanged) {
          dbentry.numChanged = numChanged;
        }     
        await collection.insertOne(dbentry);
    } catch (err) {
        console.error('Error: ', err);
    }
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function pageVisited() {
  try {
    const currentdate = new Date();
    const pst = new Date(currentdate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));

    const month = pst.getMonth() + 1;
    const day = pst.getDate();
    const year = pst.getFullYear();
    const date = `${year}-${month}-${day}`;

    await client.connect();
    const collection = db.collection('pageVisits');
    const filter = { date: date };

    const existingDocument = await collection.findOne(filter);

    if (existingDocument) {
      // If the document exists, update the 'visits' field by incrementing it
      await collection.updateOne(filter, { $inc: { visits: 1 } });
    } else {
      // If the document doesn't exist, insert a new one with 'visits' set to 1
      await collection.insertOne({
        date: date,
        visits: 1
      });
    }
  } catch (err) {
    console.error('Error: ', err);
  }
}

async function brUpdated() {
  try {
    await client.connect();
    await dataColl.updateOne (
      { _id: 'bathroomUpdates' },
      { $inc: { value: 1 } }
    );
  } catch (err) {
    console.error('Error: ', err);
  }
}
// #endregion

// #region Other Nonsense
function numDiffCharacters(arr1, arr2) {
  let differentCharacters = 0;

  for (let i = 0; i < arr1.length; i++) {
      const str1 = arr1[i];
      const str2 = arr2[i];

      for (let j = 0; j < Math.min(str1.length, str2.length); j++) {
          if (str1[j] !== str2[j]) {
              differentCharacters++;
          }
      }

      differentCharacters += Math.abs(str1.length - str2.length);
  }
  return differentCharacters;
}
// Writes text to a file
async function writeToFile(filename, newText, includeDate, other) {
  filename = 'txt/' + filename;
  fs.readFile(filename + '.txt', function(err, buf) {
    var previousText = String(buf);
    date = includeDate ? dateTime() : '';

    var txt = date + " | " + String(newText) + '\n' + previousText;

    fs.writeFile(filename + '.txt', txt, err => {
      if (err) throw err;
    });
  });
}


// Gets the current datetime
function dateTime() {
    var currentdate = new Date();
    var pst = new Date(currentdate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));

    var month = pst.getMonth() + 1;
    var day = pst.getDate();
    var year = pst.getFullYear().toString().slice(-2);
    var hours = pst.getHours();
    var minutes = pst.getMinutes();
    var seconds = pst.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // handle midnight (12 AM)

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedDate = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ' ' + ampm;
    return formattedDate;
}

app.route('/reqtypes')
  .get(function(req, res) {
    res.send('Get');
  })
  .post(function(req, res) {
    res.send('Post');
  })
  .put(function(req, res) {
    res.send('Put');
  });

const PORT = process.env.PORT || 42069;
// thing that works but nobody knows how PLZ DONT TOUCH PLZZZZ
// i touched it... sorry :(
app.listen(PORT, '0.0.0.0', () => {
  console.log(`server started on port ${PORT}`);
});

// #endregion