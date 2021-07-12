
		function mudarCor(obj) {
			if (obj.style.backgroundColor == "rgb(255, 0, 0)") {
				obj.style.backgroundColor = "rgb(0, 255, 0)";
			
			}else if (obj.style.backgroundColor == "rgb(0, 255, 0)") {
				obj.style.backgroundColor = "rgb(0, 0, 255)";

			} else {
				obj.style.backgroundColor = "rgb(255, 0, 0)";
			}
		}