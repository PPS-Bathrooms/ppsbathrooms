$('#navbar').html(
  '<button id="navbarButton"><img id="icon16" src="../style/icons/bars.svg"></button>' + 
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




$("#navbarButton").click(function(){
  $("#navbarBackground").animate({width: 'toggle'}, 100);
});