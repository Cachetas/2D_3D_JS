
let iSeq_A = 0; seq_A = [1, 2, 3, 2];

let iSeq_B = 0; seq_B = [7, 8, 9, 8];

	function Anim(iSeq, seq){

		document.getElementById("square" + (seq[iSeq])).style.backgroundColor = "#ff0000";
		if (iSeq == 0){
			document.getElementById("square" + (seq[seq.length - 1])).style.backgroundColor = "#0000ff";
		
		} else {
			document.getElementById("square" + (seq[iSeq - 1])).style.backgroundColor = "#0000ff";
		}
		iSeq++;
		if (iSeq >= seq.length){
			iSeq = 0;
		}
		return iSeq;
	}

		function iniciar() {
			setInterval(function(){
				iSeq_A = Anim(iSeq_A, seq_A);
				iSeq_B = Anim(iSeq_B, seq_B);
	}, 500);
}

