


let squares = 25; squareActive = -1; squareInactive = -1; score = 0;
//let condition = true;

	function scoreSum(obj){

		if(obj.style.backgroundColor == "rgb(255, 0, 0)"){
			score++;
			document.getElementById("score").innerHTML = "SCORE: " + score;
			document.getElementById("square" + squareInactive).style.backgroundColor = "#0000FF";
		}

	}


		function iniciar() {
			setInterval(function(){
				if(squareInactive != -1){
					document.getElementById("square" + squareInactive).style.backgroundColor = "#0000FF";
				}
				squareActive = Math.floor(Math.random() * squares);
				document.getElementById("square" + squareActive).style.backgroundColor = "#FF0000";
				squareInactive = squareActive;
				
	}, 1200);
}

				



