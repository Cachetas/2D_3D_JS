
let l = 21; h = 21; lquad = 20;

function iniciar(){

	for(i = 0, yquad = 0; i<l; i++, yquad = yquad + lquad){
		for(j = 0, xQuad = 0; j<h; j++, xQuad = xQuad + lquad){

			document.write(
				"<div id =\"quad_" + j + "_" + i + 
				"\" style=\"position:absolute; background-color:#00FFFF; width:" 
				+ lquad + 
				"px; height:" + lquad + 
				"px; left:" + xQuad + "px; top:" + yquad + "px;" +
				"border: solid 1px #000000; \"></div>");

		}
	}
}

				



