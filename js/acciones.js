// JavaScript Document
// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"> <img src="imagenes/tumblr_m94rbfuGUQ1qzbbtto1_500.gif" width="200" height="81"> <div class="panel-content" align="center">  <div data-role="controlgroup"> <a data-role="button" href="#principal"> Principal </a>  <a data-role="button" href="#ECO"> ECONOMIA </a> <a data-role="button" href="#GEO"> GEOGRAFIA</a>  <a data-role="button" href="#HISTORIA"> HISTORIA </a> <a data-role="button" href="#EDU"> EDUCACION </a>  <a data-role="button" href="#CRI">CRIMEN</a> <a data-role="button" href="#CULT"> CULTURA </a><a href="#demo-links" data-rel="close" data-role="button" data-theme="a" data-icon="delete" data-inline="true">Cerrar</a></div></div></div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
  document.addEventListener("deviceready",function(){
  $('#btn').tap(function(){
    navigator.notification.vibrate(500);
  });
   $('#btn').tap(function(){
    navigator.notification.Beep(1);
  });
 },false); //deviceready
});

	

