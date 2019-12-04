$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu__bar').click(function(){
		if (contador == 1) {
			$('.menu__navigation').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.menu__navigation').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.subMenu').click(function(){
		$(this).children('.menu__children').slideToggle();
	});
}