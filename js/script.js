var items = document.querySelectorAll('.parallax');

for (var i = 0; i < items.length; i++ ) {

	var item = items[i];
	item.classList.add('out');

	var parallax = new Parallax(item);
	console.log(parallax, item);
}

function Parallax(elem) {

	if( !(this instanceof Parallax) ) {
		return new Parallax(elem);	
	}

	this.elem = elem;
	this.friction = elem.getAttribute('data-friction');
}

Parallax.prototype.run = function() {
	console.log('run');
}

Parallax.prototype.clear = function() {
	console.log('clear');
}
