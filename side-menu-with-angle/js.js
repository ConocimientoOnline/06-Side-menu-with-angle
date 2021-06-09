function desplazar_derecha(){
	var menu = document.getElementById('menu');
	var content_txt = document.getElementById('contet-txt');
	var menu_items = document.getElementById('menu-items');
	var content_bd = document.getElementById('content-bd');
	var opcs = document.getElementById('opcs');
	var tit = document.getElementById('tit');
	content_bd.style.transform = 'rotate(-20deg)';
	menu_items.style.transform = 'rotate(-20deg)';
	menu.style.transform = 'rotate(-20deg)';
	menu.style.display = 'flex';
	pencil.style.display = 'none';
	menu_items.style.transform = 'translateX(0)';
	tit.style.right = '100px';
}

function desplazar_izquierda(){
	var menu = document.getElementById('menu');
	var content_txt = document.getElementById('contet-txt');
	var menu_items = document.getElementById('menu-items');
	var content_bd = document.getElementById('content-bd');
	var opcs = document.getElementById('opcs');
	var tit = document.getElementById('tit');
	content_bd.style.transform = 'rotate(0deg)';
	menu_items.style.transform = 'rotate(0deg)';
	menu.style.transform = 'rotate(0deg)';
	menu_items.style.transform = 'translateX(-500px)';
	menu.style.display = 'none';
	pencil.style.display = 'flex';
	tit.style.right = '-120%';
}
