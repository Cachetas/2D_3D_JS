
let l = 30; h = 30; lquad = 10, centerX= 0, centerY = 0, color = "#CCCCCC";



function iniciar(){

	for(i = 0, yquad = 0; i<l; i++, yquad = yquad + lquad){

		centerX++;
		centerY = 0;
		for(j = 0, xQuad = 0; j<h; j++, xQuad = xQuad + lquad){
			centerY++;

			if (centerX == 15 && centerY == 15){
				color = "#0000FF";
			} else {color = "#CCCCCC"}


			document.write(
				"<div id =\"quad" + j + "_" + i + 
				"\" style=\"position:absolute; background-color:" + color + "; width:" 
				+ lquad + 
				"px; height:" + lquad + 
				"px; left:" + xQuad + "px; top:" + yquad + "px;\"></div>");

		}
	}
}


function keyDown(DnEvents){
	var key = (document.all)?window.event.keyCode:DnEvents.which;

	cima = false; direita= false; esquerda= false; baixo = false;
	
	switch (key) {
		
		case 38 : cima = true;  paraCima(); break;
		case 39 : direita = true; paraDireita(); break;
		case 37 : esquerda = true; paraEsquerda(); break;
		case 40 : baixo = true; paraBaixo(); break;
		default : alert("Esta Tecla não é válida " + String.fromCharCode (key) + " com o código " + key); break;
	}		
}

document.onkeydown = keyDown;




var direita= false, esquerda= false, baixo = false, cima = false, direccao, nX, nY, x = 14, y = 14;
function paraCima() {
	setInterval(function(){
		

			if (cima){
				nX = x.toString();
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#CCCCCC";
				y = y - 1; 
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#0000FF";



			}
	}, 500);
}


function paraDireita() {
	setInterval(function(){
			if (direita){
				nX = x.toString();
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#CCCCCC";
				x++;
				nX = x.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#0000FF";
			
			} 

		}, 500);
	}
	

function paraEsquerda() {
	setInterval(function(){
			if (esquerda){
				nX = x.toString();
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#CCCCCC";
				x = x - 1;
				nX = x.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#0000FF";

			} 



		}, 500);
	}
	
		
function paraBaixo() {
	setInterval(function(){			
			if (baixo){
				nX = x.toString();
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#CCCCCC";
				y++;
				nY = y.toString();
				document.getElementById("quad" + nX + "_" + nY).style.backgroundColor = "#0000FF";

				if (y > 30){
					window.confirm("GAME OVER");	
				}
			} 

	}, 500);
}




				



