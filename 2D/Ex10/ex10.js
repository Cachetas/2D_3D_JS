
	function keyDown(DnEvents){
		var key = (document.all)?window.event.keyCode:DnEvents.which;

		switch (key) {
			case 38 : alert("Tecla Cima"); break;
			case 39 : alert("Tecla Direita"); break;
			case 37 : alert("Tecla Esquerda"); break;
			case 40 : alert("Tecla Baixo"); break;

			default : alert("Tecla " + String.fromCharCode (key) + " com o código " + key); break;
		}		
}

document.onkeydown = keyDown;

				



