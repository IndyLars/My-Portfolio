
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.home .arrow').addEventListener('click', function(){
		document.querySelector('.home>main').classList.toggle('show');
		document.querySelector('.home .arrow').classList.toggle('rotate');
	});
});
