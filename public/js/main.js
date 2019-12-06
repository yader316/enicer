$(document).ready(main);
 
function main () {
	$('.menu__bar').click(function(){
		// console.log('aqui');
		$('.menu__navigation').toggleClass('active');
	});
	// Mostramos y ocultamos submenus
	$('.subMenu').click(function(){
		$(this).children('.menu__children').slideToggle();
	});
}