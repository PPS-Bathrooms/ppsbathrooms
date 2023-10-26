//navbar
$('#navbar').html(
  '<button id="navbarButton"><img id="icon24" src="../style/icons/bars.svg"></button>' + 
  '<div id="navbarBackground">' +
    '<div id="schoolButtons">' +
      '<a href="/cleveland"><img class="navbarImg" src="../style/images/logos/clevelandLogo.png"></img></a><br>' +
      '<a href="/franklin"><img class="navbarImg" src="../style/images/logos/franklinLogo.png"></img></a><br>' + 
      '<a href="/ida"><img class="navbarImg" src="../style/images/logos/idaLogo.png"></img></a><br>' +
    '</div>' +
    '<div id="navButtonsBottom">' +
        '<a href="privacy.html">privacy</a>' +
        '<a href="terms.html">terms</a>' +
    '</div>'
);

$('#buttons').html(
  '<div>' +
    '<div class="bottomButtonHolder">' +
      '<div id="bottomButtonNavbarShift"></div>' + 
      '<button id="feedbackButton"><img id="icon16" src="/style/icons/feedback.svg"></img></button>' +
      '<button id="highlightRoomButton"><img id="icon16" src="/style/icons/find.svg"></img></button>' +
    '</div>' +
    '<div class="bottomSubmit">' +
      '<button id="submitButton"><img id="icon16" src="/style/icons/check.svg"></img>' +
        '<p> (0)</p>' +
      '</button>' +
    '</div>' +
  '</div>'
);


//footer
$('#footer').html('<p id="footerText">© sid collective 2023</p>');


//navbar functions
$("#navbarButton").click(function(){
  $("#navbarBackground").animate({width: 'toggle'}, 100);
  $("#bottomButtonNavbarShift").animate({width: 'toggle'}, 100);
});