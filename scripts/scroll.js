window.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('scroll', function(event) {
		console.log(document.querySelector('html').scrollTop);
		if (document.querySelector('html').scrollTop > 1) {
			
			document.querySelector('#wrapper').classList.add('scrolled');
		}
		else {
			document.querySelector('#wrapper').classList.remove('scrolled');
		}
		// if (document.querySelector('html').scrollTop > 250) {
			// document.querySelector('#scroll-to-top').classList.add('scrolled');
		// }
		// else {
			// document.querySelector('#scroll-to-top').classList.remove('scrolled');
		// }
	}, false);
});