pageId = $('#pageID').html();

//append navbar
$('.header').html(
`<svg width="540.20508mm" height="65.529312mm" viewBox="0 0 540.20507 65.529313" id="logo" xml:space="preserve">
    <g transform="translate(273.21595,-119.27485)" style="display:inline">
        <path style="fill:#fff;stroke-width:1.65069" d="m -194.08602,182.27426 c -0.74528,-0.47076 -0.89787,-3.67124 -1.03973,-21.80762 -0.16259,-20.79341 -0.14014,-21.28194 1.0324,-22.45454 1.55092,-1.55092 3.3924,-0.69742 3.89272,1.80421 l 0.34965,1.74823 1.52201,-1.45784 c 5.86841,-5.62088 16.10259,-3.61119 19.97866,3.92324 1.70031,3.3051 2.09486,10.14222 0.83528,14.47497 -1.15589,3.97619 -4.35281,7.45842 -8.1941,8.92542 -3.71042,1.41701 -8.82649,0.54099 -12.07187,-2.06706 l -2.22873,-1.79106 v 8.72074 c 0,7.1515 -0.16474,8.88538 -0.91509,9.6358 -1.04325,1.04327 -1.90709,1.13767 -3.1612,0.34551 z m 17.52924,-19.37977 c 6.15175,-4.08816 6.26515,-17.08456 0.18189,-20.84422 -4.07842,-2.5206 -9.52864,-1.23156 -12.32262,2.91442 -1.13749,1.68791 -1.31222,2.69967 -1.31222,7.59823 0,4.90335 0.17336,5.90497 1.31023,7.57051 2.72963,3.99894 8.35517,5.27809 12.14272,2.76106 z m 21.99463,18.98636 c -0.64514,-0.77734 -0.7992,-5.05211 -0.7992,-22.17531 0,-20.12134 0.0566,-21.25368 1.09951,-22.01632 1.51123,-1.10503 3.21047,-0.11736 3.65936,2.12709 l 0.34963,1.74823 1.52203,-1.45784 c 5.86826,-5.62075 16.09286,-3.61333 19.98272,3.92324 1.75696,3.40406 2.13087,10.79934 0.75542,14.94045 -1.2467,3.75343 -4.39969,7.03978 -8.11568,8.45893 -3.71732,1.41966 -8.66628,0.56447 -11.99635,-2.07302 l -2.30687,-1.82706 v 8.74222 c 0,7.17103 -0.16441,8.90668 -0.91509,9.65729 -1.17627,1.17627 -2.23249,1.16063 -3.23548,-0.0479 z m 16.96054,-18.54431 c 5.17548,-2.67634 7.11988,-11.89744 3.84439,-18.23156 -2.02419,-3.91432 -8.0892,-5.56017 -12.016,-3.26076 -3.74655,2.19384 -4.3472,3.67485 -4.3472,10.7187 0,5.44533 0.16375,6.53956 1.18338,7.90519 2.54245,3.40533 7.74926,4.72291 11.33543,2.86843 z m 28.53515,4.05174 c -4.41208,-1.23263 -7.57024,-3.39614 -7.57024,-5.18601 0,-1.91886 1.80775,-2.39571 4.09455,-1.08006 5.03218,2.89514 5.59768,3.08543 9.17206,3.0863 6.362354,0.002 9.061133,-2.04622 8.042973,-6.10291 -0.46064,-1.83532 -2.260419,-2.72311 -8.780703,-4.33134 -8.41178,-2.07477 -11.36423,-4.36321 -11.36423,-8.8084 0,-2.57517 1.53446,-4.87576 4.31499,-6.46945 2.08957,-1.19766 3.14339,-1.36514 8.59037,-1.36514 5.979144,0 6.302003,0.0655 8.734893,1.77467 1.81099,1.27221 2.52626,2.17904 2.52626,3.2028 0,2.05357 -2.01813,2.13442 -4.94415,0.19806 -6.146223,-4.06737 -16.279643,-1.13486 -13.926303,4.03014 0.81603,1.791 2.3037,2.47786 8.49209,3.92079 9.034143,2.1065 12.143543,4.62343 11.683943,9.45766 -0.31427,3.30574 -1.91156,5.30391 -5.54593,6.93787 -3.396519,1.52701 -9.498403,1.85873 -13.520573,0.73502 z m 44.385898,0.0416 c -1.37023,-0.42788 -3.38367,-1.45858 -4.47434,-2.29048 l -1.98302,-1.51252 -0.18427,1.54278 c -0.23732,1.9869 -1.83796,3.06146 -3.24149,2.17615 -0.9431,-0.59491 -1.01906,-2.39596 -1.01906,-24.16355 v -23.52072 l 1.34229,-0.19027 c 2.81458,-0.39901 3.02514,0.41322 3.02514,11.66869 v 10.46233 l 1.89257,-1.59583 c 5.4714,-4.61352 12.9447,-4.11434 17.83529,1.19131 2.76074,2.99506 3.68444,5.96012 3.66171,11.75407 -0.0274,6.96973 -2.55585,11.40197 -7.95792,13.94946 -3.27138,1.54271 -5.26914,1.6614 -8.8969,0.52858 z m 6.23598,-4.073 c 4.29044,-2.21868 6.45598,-7.90935 5.32924,-14.00445 -0.33253,-1.79877 -1.1551,-4.04362 -1.82796,-4.98854 -3.50156,-4.91751 -11.05404,-4.82284 -14.62469,0.18329 -1.21315,1.70087 -1.35615,2.54606 -1.35615,8.01577 0,5.38243 0.15467,6.33119 1.29171,7.92526 2.42634,3.40151 7.59475,4.72674 11.18785,2.86867 z m 28.08143,4.28726 c -3.37419,-0.6419 -5.90603,-2.19196 -7.5639,-4.63082 -1.11715,-1.64341 -1.31961,-2.56089 -1.11836,-5.06834 0.27958,-3.48331 1.61494,-5.29958 5.39011,-7.33126 3.05794,-1.6457 11.76226,-1.77204 14.6748,-0.213 1.025,0.54867 2.00768,0.99757 2.18372,0.99757 0.68252,0 0.27629,-5.96579 -0.50973,-7.48578 -1.59139,-3.07741 -7.14666,-4.26224 -12.93889,-2.75963 -6.22358,1.61452 -8.86356,0.84749 -5.88912,-1.71102 3.31117,-2.84815 14.21049,-3.35078 19.29424,-0.88979 4.33784,2.0999 5.02219,4.23254 5.02219,15.65054 v 9.42452 h 1.63568 c 2.4106407,0 4.0704209,1.39369 3.2535407,2.73193 -0.48299,0.79126 -1.51618,1.09586 -4.1542307,1.2248 -3.83539,0.18745 -5.3936,-0.66053 -5.3936,-2.93517 v -1.22458 l -1.31023,1.19805 c -3.03343,2.7737 -7.82686,3.92552 -12.57622,3.02198 z m 9.20076,-4.59129 c 3.4114,-1.74987 4.79168,-3.61523 4.57922,-6.18851 -0.16994,-2.05835 -0.39399,-2.31693 -2.80515,-3.23754 -3.21647,-1.22808 -9.25317,-1.34955 -11.90951,-0.23966 -2.3323,0.9745 -3.23097,2.42623 -3.23097,5.21947 0,5.32071 7.07415,7.67388 13.36641,4.44624 z m 37.182841,4.41719 c -5.586371,-1.50155 -5.937821,-2.36667 -6.2924905,-15.48942 l -0.29117,-10.77302 -4.16893,-0.17002 c -3.26538,-0.13322 -4.2503896,-0.38227 -4.54471962,-1.1493 -0.60381,-1.5735 1.31740962,-2.46581 5.30914962,-2.46581 h 3.65196 l 0.16744,-5.32483 c 0.13583,-4.3201 0.3597195,-5.4458 1.1864995,-5.96587 0.74159,-0.46646 1.29655,-0.46646 2.03814,0 0.826781,0.52007 1.050661,1.64577 1.186501,5.96587 l 0.16744,5.32483 5.94698,0.008 c 6.366819,0.01 7.637679,0.37454 7.308209,2.09899 -0.18543,0.97059 -0.93561,1.12792 -6.608459,1.38603 l -6.39927,0.29117 v 9.71286 c 0,8.91123 0.0994,9.84581 1.20409,11.32399 1.66622,2.22951 4.06379,2.77559 6.643659,1.51318 1.64902,-0.8069 2.23259,-1.57553 2.97288,-3.91561 0.77105,-2.43734 1.15048,-2.91163 2.3293,-2.91163 1.22801,0 1.43033,0.30049 1.58108,2.34827 0.43084,5.85221 -6.44339,10.05808 -13.388289,8.19138 z m 114.640431,-0.0185 c -6.59653,-1.7731 -10.37349,-6.62757 -10.78205,-13.85802 -0.32306,-5.71739 0.72792,-8.89313 4.03882,-12.20403 6.55125,-6.55124 18.87915,-5.71317 23.9248,1.62646 3.01159,4.38079 3.38985,12.63371 0.80789,17.62666 -1.43897,2.78268 -5.30775,5.6692 -8.97895,6.69929 -3.95184,1.10882 -5.23508,1.12444 -9.01051,0.10961 z m 9.30135,-4.44757 c 1.97156,-0.95443 2.8144,-1.86792 4.04595,-4.38512 1.36449,-2.78892 1.51994,-3.67813 1.26527,-7.23755 -0.21835,-3.05173 -0.66111,-4.61824 -1.78554,-6.31736 -1.65458,-2.50025 -5.59423,-4.73729 -8.30705,-4.71699 -2.47087,0.0185 -6.17848,1.86912 -7.94089,3.96363 -3.74318,4.4485 -3.12838,13.87259 1.15788,17.74885 2.57432,2.32806 7.82115,2.75659 11.56438,0.94454 z m 30.45881,4.48871 c -7.30964,-1.97143 -11.04186,-7.19589 -11.02971,-15.43964 0.014,-9.50473 7.23684,-15.93234 16.91709,-15.05456 6.95853,0.63098 12.05765,4.93254 13.37622,11.28405 1.8801,9.05639 -2.33713,16.7928 -10.38492,19.05091 -3.95043,1.10842 -5.27144,1.13212 -8.87868,0.15929 z m 10.1699,-4.8255 c 2.48024,-1.79379 4.41704,-6.32147 4.41704,-10.32583 0,-10.34323 -9.81426,-15.48344 -17.193,-9.00481 -5.95447,5.22809 -3.68632,18.46865 3.50834,20.48031 2.25565,0.63067 7.74801,-0.0507 9.26762,-1.14967 z m 18.82959,4.9737 c -0.92781,-0.5259 -1.01906,-1.87677 -1.01906,-15.08632 0,-13.85668 0.0517,-14.53641 1.1513,-15.12488 0.91443,-0.4894 1.39367,-0.3738 2.3293,0.56184 0.6479,0.64789 1.18633,1.63657 1.19652,2.19706 0.0169,0.92705 0.0949,0.91812 0.86439,-0.0989 2.67729,-3.53838 7.45965,-4.31376 10.13088,-1.64252 0.88385,0.88385 1.72401,1.95805 1.86703,2.38711 0.17376,0.52125 1.05212,-0.0116 2.64715,-1.60699 2.03377,-2.03378 2.74769,-2.38711 4.8232,-2.38711 5.90496,0 6.6538,1.78507 6.91759,16.4901 0.11387,6.34718 0.0543,12.1488 -0.13235,12.8925 -0.43097,1.71713 -1.67821,2.20557 -3.05887,1.19791 -0.96566,-0.70476 -1.10546,-1.9751 -1.36684,-12.42061 -0.25979,-10.38191 -0.41068,-11.76742 -1.40048,-12.85958 -1.49213,-1.64644 -2.89186,-1.54078 -4.9987,0.37735 -2.31031,2.10335 -2.91803,5.48109 -2.91803,16.21853 0,7.54141 -0.10426,8.39955 -1.08421,8.924 -0.75562,0.40439 -1.35941,0.36649 -1.9923,-0.12512 -0.75032,-0.58279 -0.94837,-2.62753 -1.13995,-11.76953 -0.24908,-11.88555 -0.71087,-14.01992 -3.16669,-14.63629 -1.57815,-0.39608 -3.86849,0.9144 -4.97078,2.8442 -0.50074,0.87666 -0.84474,4.85219 -1.03956,12.01393 -0.26891,9.88565 -0.38017,10.76203 -1.45581,11.46727 -0.81439,0.53395 -1.47113,0.58987 -2.18372,0.18598 z m 48.63795,-0.15599 c -1.67391,-0.42517 -4.11386,-1.48138 -5.42213,-2.34715 -1.94174,-1.28499 -2.34537,-1.86151 -2.19747,-3.13871 0.2612,-2.25545 1.79215,-2.26125 5.28482,-0.02 2.83174,1.81713 3.34149,1.93941 8.08406,1.93941 4.5556,0 5.21201,-0.14113 6.56447,-1.41173 1.87351,-1.76008 1.94518,-4.08401 0.17716,-5.74497 -0.78321,-0.73579 -3.70186,-1.87652 -7.13349,-2.78806 -9.49123,-2.52113 -11.92234,-4.266 -11.92234,-8.55698 0,-5.37881 3.60829,-7.9808 11.70777,-8.4426 4.50088,-0.25663 5.37216,-0.13107 8.25852,1.19038 3.56722,1.63312 5.02415,3.44666 3.87817,4.82746 -0.99422,1.19799 -2.00968,1.04386 -4.65451,-0.70639 -5.81012,-3.84496 -15.54641,-1.41634 -14.29594,3.56596 0.44703,1.78109 2.6174,2.95065 7.63491,4.11429 9.31917,2.16126 12.44976,4.22792 12.92112,8.52987 0.56328,5.14097 -4.14089,8.92801 -11.76539,9.47163 -2.454,0.17495 -5.2875,-0.017 -7.11973,-0.4824 z M 43.619308,167.00457 c -1.00351,-1.0035 -1.00351,-45.93193 0,-46.93543 0.99836,-0.99837 3.18977,-0.86328 3.60635,0.22231 0.1944,0.50661 0.35346,5.66793 0.35346,11.46959 v 10.54847 l 1.89256,-1.8317 c 5.46484,-5.2891 14.53359,-4.61232 17.581611,1.31208 1.088344,2.11539 1.198394,3.36612 1.198394,13.6199 0,10.11937 -0.10571,11.35742 -1.01907,11.9347 -0.74206,0.46901 -1.296082,0.46987 -2.038135,0.003 -0.88427,-0.55615 -1.06328,-1.98082 -1.35328,-10.77004 -0.19517,-5.91533 -0.63724,-10.90046 -1.06264,-11.98326 -2.24585,-5.71648 -10.63577,-5.13689 -13.85849,0.95737 -1.23449,2.33445 -1.34095,3.25892 -1.34095,11.64492 0,9.30365 -0.26671,10.50673 -2.3293,10.50673 -0.51245,0 -1.24618,-0.31445 -1.63051,-0.6988 z m 39.627261,0.0984 c -3.098008,-1.24526 -0.551198,-3.47582 3.968606,-3.47582 h 2.291394 v -11.35534 -11.35535 h -3.51223 c -2.722047,0 -3.594911,-0.21547 -3.879734,-0.9577 -0.599724,-1.56285 1.448027,-2.53626 5.335552,-2.53626 4.337279,0 6.132692,1.04705 6.132692,3.57648 v 1.76344 l 2.586006,-2.2763 c 4.085695,-3.59636 9.907555,-4.75645 12.635525,-2.51777 1.12199,0.92075 1.25536,1.32223 0.72541,2.18372 -0.53447,0.86883 -1.42802,1.05555 -5.05131,1.05555 -3.53733,0 -4.71811,0.23584 -6.011427,1.20063 -3.948735,2.94572 -4.849794,5.71327 -4.870312,14.9589 l -0.01387,6.26 3.057209,0.008 c 4.40192,0.0115 5.67768,0.46762 5.67768,2.03018 0,0.87661 -0.4401,1.43793 -1.31023,1.67112 -2.032451,0.54466 -16.29135,0.35726 -17.760939,-0.23344 z" id="logoText" />
        <g id="g3" transform="matrix(0.91866692,0,0,0.91866692,-31.558251,13.447529)">
            <path style="fill:#fff;stroke-width:0.182621" d="m -227.46117,186.52749 v -4.41635 h -4.47444 v -9.0031 h 4.47444 v -4.45893 h 4.45049 v -4.45487 h 4.45632 v -4.46238 h 4.45636 v -4.45439 h 4.46596 v -4.36652 h -53.42053 v 8.8186 h 8.92181 v 4.46469 h 4.45365 v 13.46836 h -4.45365 v 8.86489 z" id="logoToiletBottom" />
            <path style="fill:#fff;stroke-width:0.182621" d="m -209.63204,146.37921 v -4.38167 h -35.6755 v -26.80092 h -17.74503 v 31.16665 z" id="logoToiletTop" />
        </g>
    </g>
</svg>

<div id="navbar"> 
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
            <div>
                <p id="aboutRedirect">about</> 
            </div>
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
        <a href="/createaccount" id="navbarNewAccount">create account</a>
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

  $("#navbarNewAccount").animate({opacity: 1}, 400);

  if($(window).width() > 800) {
    $('#username').focus();
  }
});

$("#navbarButton").click(function(){
  if(!$(this).hasClass('open')) {
    resetSignIn();
    $('#navbarBackground').scrollTop(0);
    $("#navbarNewAccount").css('opacity', '0');
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

$("#aboutRedirect").click(function() {
  window.location.href = "/about";
  currentPage = window.location.href.toString().split(window.location.host)[1]
});

$("#logo").click(function() {
  window.location.href = "/";
  currentPage = window.location.href.toString().split(window.location.host)[1]
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