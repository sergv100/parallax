var items = document.querySelectorAll('.parallax');

for (var i = 0; i < items.length; i++ ) {
	var item = items[i];

	parallax(item);
}

function parallax(item) {
	var current         = item,
		currentFriction = current.getAttribute('data-friction'),
		wrap            = current.getBoundingClientRect(),
		top             = wrap.top + pageYOffset,
		bottom          = top + wrap.height;

	document.addEventListener('scroll', function(e) {
		var winH      = window.innerHeight,
			winBottom = pageYOffset + winH,
			offset    = winBottom - top,
			diff      = offset*currentFriction;

		window.requestAnimationFrame(function () {
			
			if(top < winBottom && bottom >= pageYOffset) {
				parallaxRun(item, diff);
			}

			if(bottom < pageYOffset || top > winBottom) {
				parallaxStop(item);	
			}
		});
	});
}

function parallaxRun(item, diff) {
	item.style.transform = "translate3d(0, " + diff + "%, 0)";
}

function parallaxStop(item) {
	item.style.transform = "";	
}
