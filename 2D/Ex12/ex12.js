
let l = 30; h = 30; lquad = 10;

let color = ["#000000", "#FFFFFF"], iC = 0;


function iniciar(){

	for(i = 0, yquad = 0; i<l; i++, yquad = yquad + lquad){
		if (iC == 1){
			iC = 0;
		} else{ iC=1; }
		for(j = 0, xQuad = 0; j<h; j++, xQuad = xQuad + lquad){
			if (iC == 1){
				iC = 0;
			} else{ iC=1; }
			document.write(
				"<div id =\"quad_" + j + "_" + i + 
				"\" style=\"position:absolute; background-color:"+color[iC]+"; width:" 
				+ lquad + 
				"px; height:" + lquad + 
				"px; left:" + xQuad + "px; top:" + yquad + "px;\"></div>");

		}
	}
}

				



