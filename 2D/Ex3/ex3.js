
let quadradoAtivo = 1;
function iniciar() {
	setInterval(function(){
		if (quadradoAtivo == 1){
			document.getElementById("square" + "9").style.backgroundColor = "#0000ff";

		} else if (quadradoAtivo >1 && quadradoAtivo < 10) {
			document.getElementById("square" + (quadradoAtivo - 1)).style.backgroundColor = "#0000ff";
		
		} else {
			document.getElementById("square" + (quadradoAtivo - 1)).style.backgroundColor = "#0000ff";
			quadradoAtivo = 1;
		}
		document.getElementById("square" + (quadradoAtivo)).style.backgroundColor = "#ff0000";
		quadradoAtivo++;
	}, 250);
}

