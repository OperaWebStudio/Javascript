var pagetop, menu, yPos;

function yScroll() {
		pagetop = document.getElementById('pagetop');
		menu = document.getElementById('menu');
		logo = document.getElementById('logo');
		yPos = window.pageYOffset;


		if (yPos > 150) {
				pagetop.style.height = '50px';
				pagetop.style.padding = '8px 0';
				pagetop.style.borderBottom = '5px solid darkorange';
				menu.style.height = '0px';
				logo.style.transform = 'translateX(-45%)';
				logo.style.height = '30px';
		} else {
				pagetop.style.height = '150px';
				pagetop.style.padding = '20px 0';
				pagetop.style.borderBottom = 'none';
				menu.style.height = '50px';
				logo.style.transform = 'none';
				logo.style.height = '50px';
		}
}

window.addEventListener("scroll", yScroll);
