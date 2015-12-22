$( document ).ready(function(){$(".button-collapse").sideNav();});

document.write(
'<nav>'+
    '<div style="background-color:#4f48ff;" class="nav-wrapper">'+
      '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
      '<a id="logo" href="index.html" class="brand-logo center">Introduction</a>' +
      '<ul class="side-nav" id="mobile-demo">'+
        '<li><a href="game.html">Introduction</a></li>'+
      '</ul>'+
    '</div>'+
  '</nav>'
);