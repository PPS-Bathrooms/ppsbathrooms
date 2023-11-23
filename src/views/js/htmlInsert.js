pageId = $('#pageID').html();

//append navbar
$('#navbar').html(
`<div id="navbar"> 
    <img src="../style/icons/noWifi.svg" id="noWifi"></img> 
    <div id="navbarButton"> 
        <span></span> 
        <span></span> 
        <span></span> 
        <span></span> 
        </div> 
    <div id="navbarTopFade"></div> 
    <div id="navbarBackground"> 
        <div id="schoolButtons"> 
            <div> 
                <p id="homeRedirect">home</> 
            </div> 
            <div id="chsNavbar"> 
                <p>cleveland</p> 
                <img id="chsNav" src="../style/images/logos/clevelandLogo.png"></img> 
            </div> 
            <div id="fhsNavbar"> 
                <p>franklin</p> 
                <img src="../style/images/logos/franklinLogo.png"></img> 
            </div> 
            <div id="ihsNavbar"> 
                <p>ida</p> 
                <img src="../style/images/logos/idaLogo.png"></img> 
            </div> 
            
            <hr style="width: 85%;"> 
            <div id="ihsNavbar"> 
                <p id="navbarSignIn">sign in</p> 
            </div> 
        </div> 
        <div id="navbarLogin"> 
          <form id="navLoginForm"> 
            <div id="navLoginInputBg"> 
                <input type="text" placeholder="username" id="username" name="username" autocomplete="off"> 
            </div> 
            <div id="navLoginInputBg"> 
                <input type="password" placeholder="password" id="password" name="password" autocomplete="off"> 
            </div> 
            <div id="navLoginContainer"> 
                <button id="navbarLoginButton" type="submit">login</button> 
            </div> 
          </form> 
        </div> 
        <div id="navButtonsBottom"> 
          <a href="/help">help</a> 
          <a href="/contact">contact</a> 
          <a href="/privacy">privacy</a> 
          <a href="/terms">terms</a> 
        </div> 
        <div id="navbarScroll"></div> 
      </div> 
    </div>
  </div>`
);

//append bottom buttons
$('#buttons').html(
  `<div>
    <div class="bottomSubmit">
      <button id="submitButton" title="submit bathroom changes"><img id="icon16" src="/style/icons/check.svg"></img>
        <p> (0)</p>
      </button>
    </div>
  </div>`
);


//footer
$('#footer').html(
  `<p id="footerText">© sid collective 2023</p>
  <div id="footerRight">
    <a id="footerContact" href="/contact">contact</a>
    <a href="/help">help</a>
  </div>`
);

$('#navbarSignIn').click(function() {
  $(this).fadeOut(100)

  $('#navbarLogin').fadeIn(400)
  $("#navbarLogin").animate({
      top: '273px'
  }, { duration: 300, queue: false });
  $("#navbarScroll")[0].scrollIntoView({
      behavior: "smooth",
      block: "start"
  });

  if($(window).width() > 800) {
    $('#username').focus();
  }
});

$("#navbarButton").click(function(){
  if(!$(this).hasClass('open')) {
    resetSignIn();
    $('#navbarBackground').scrollTop(0);
  }
  var rightValue = $('#navbarBackground').css('right');
  $(this).toggleClass('open');
  if(rightValue == '0px') {
    $("#navbarBackground").animate({right: '-200px'}, 100);
    if($(window).width() < 801) {
      $("#mapHolder").animate({left: '0px'}, 100);
      $("#titleLower, #mainTitle, #menuLabels").animate({left: '0px'}, 100);
    }
  }
  else {
    $("#navbarBackground").animate({right: '0px'}, 100);
    if($(window).width() < 801) {
      $("#mapHolder").animate({left: '-200px'}, 100);
      if(window.location.href.toString().split(window.location.host)[1] == '/') {
        $("#titleLower, #mainTitle, #menuLabels").animate({left: '-200px'}, 100);
      }
    }
  }
  
});

//no wifi icon
if (!navigator.onLine) {
  $('#noWifi').show();
}

isSchoolPage = (pageId != '404') && (pageId != 'help')

//navbar school click event
$("#chsNavbar").click(function(){
  if(isSchoolPage) {
    selectSchool('chs', true)
    hideNavbar();
  }
  else {
    fourNavbar('chs');
  }
});

$("#fhsNavbar").click(function(){
  if(isSchoolPage) {
    selectSchool('fhs', true)
    hideNavbar();
  }
  else {
    fourNavbar('fhs');
  }
});

$("#ihsNavbar").click(function(){
  if(isSchoolPage) {
    selectSchool('ihs', true)
    hideNavbar();
  }
  else {
    fourNavbar('ihs');
  }
});

//change navbar functionality for 404 page, redirect instead of replacing map
function fourNavbar(school) {
  if(school) {
    window.location.replace("/" + schoolNameConvert(school, false));
  }
  else {
  window.location.replace("/");
  }
  currentPage = window.location.href.toString().split(window.location.host)[1]
}

//footer help redirect
$("#helpButton").click(function() {
  window.location.href = "/help";
  currentPage = window.location.href.toString().split(window.location.host)[1]
});

$("#homeRedirect").click(function() {
  if(isSchoolPage) {
    $("#titleLower, #mainTitle, #menuLabels").css('left', '-200px');
    document.title = "ppsbathrooms | home";
    $("#pageID").html('school');
    $('.map').html('');
    $('.schoolChoice').css('display', 'flex');
    $('#footer').css('position', 'absolute');
    $('#buttons').hide(100);
    window.history.pushState('page2', 'Title', '/')
    currentPage = '/';
    $("#titleLower, #mainTitle, #menuLabels").animate({left: '0px'}, 100);
    hideNavbar();
  } else {
    fourNavbar();
  }

});

function hideNavbar() {
  if($('#navbarBackground').css('right') == "0px") {  
    $('#navbarButton').toggleClass('open');
    $("#navbarBackground").animate({right: '-200px'}, 100);

    if($(window).width() < 801) {
      $("#mapHolder").css('left', '-200px');
      $("#mapHolder").animate({left: '0px'}, 100);
    }
  }
}

function resetSignIn() {
    $('#navbarSignIn').fadeIn(0)
    $('#navbarLogin').fadeOut(0)
    $("#navbarLogin").css('top','290px')
}