var items = document.querySelectorAll('.parallax');

for (var i = 0; i < items.length; i++ ) {

	var item = items[i];
	item.classList.add('out');

	var parallax = new Parallax(item);
	console.log(parallax, item);
}

function Parallax(elem) {
	this.elem = elem;
	this.friction = elem.getAttribute('data-friction');
}

Parallax.prototype.run = function() {

}

Parallax.prototype.clear = function() {
	
}
