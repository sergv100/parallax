var items = document.querySelectorAll('.parallax');

for (var i = 0; i < items.length; i++ ) {
	parallax(items[i]);
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
			diff      = offset * currentFriction;

		window.requestAnimationFrame(function () {            
            if(top < winBottom && bottom >= pageYOffset) {
                return item.style.transform = "translate3d(0, " + diff + "%, 0)";
            }            
            return item.style.transform = "";                
        });
	});
}
