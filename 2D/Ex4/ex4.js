
let iSeq = 0;
let seq = [1, 2, 3, 6, 5, 4, 7, 8, 9, 6, 5, 4];
function iniciar() {
	setInterval(function(){

		document.getElementById("square" + (seq[iSeq])).style.backgroundColor = "#ff0000";
		if (iSeq == 0){
			document.getElementById("square" + (seq[seq.length - 1])).style.backgroundColor = "#0000ff";
		
		} else {
			document.getElementById("square" + (seq[iSeq - 1])).style.backgroundColor = "#0000ff";
		}

		iSeq++;
		if (iSeq >= seq.length){iSeq = 0;}
	}, 170);
}


