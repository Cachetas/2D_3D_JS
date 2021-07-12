
let iSeq_A = 0; seq_A = [1, 2, 3, 4, 5, 10, 15, 20,25, 24, 23, 22, 21, 16, 11, 6];

let iSeq_B = 0; seq_B = [7, 12, 17, 18, 19, 14, 9, 8];

//let iSeq_A = 0; seq_A = [1, 7, 13, 19, 25, 24, 23, 22, 21, 16, 11, 6, 1, 2, 3, 8, 7, 6];

//let iSeq_B = 0; seq_B = [5, 9, 13, 17, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 8, 9, 10];

let azul = "#0000ff"; amarelo = "#ffff00"; vermelho = "#ff0000"; verde = "#00ff00";
let condition = true;

	function Anim(iSeq, seq, cor){

		document.getElementById("square" + (seq[iSeq])).style.backgroundColor = cor;

		if (iSeq == 0){
			document.getElementById("square" + (seq[seq.length - 1])).style.backgroundColor = azul;
		
		} else {
			document.getElementById("square" + (seq[iSeq - 1])).style.backgroundColor = azul;
		}
		iSeq++;
		if (iSeq >= seq.length){
			iSeq = 0;
		}
		return iSeq;
	}

		function iniciar() {
			setInterval(function(){
				iSeq_A = Anim(iSeq_A, seq_A, vermelho);
				iSeq_B = Anim(iSeq_B, seq_B, verde);

				if (condition == true) {
					document.getElementById("square13").style.backgroundColor = amarelo;
					condition = false;
				} else {
					document.getElementById("square13").style.backgroundColor = azul;
					condition = true;
				}
				
	}, 330);
}

				



