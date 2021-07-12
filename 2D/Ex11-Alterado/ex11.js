


let l = 21; h = 21; lquad = 20; squareColor = -1;

//let color = ["#272324", "#83B799", "#E2CD6D", "#C2B28F", "#E4D8B4", "#E86F68", "#0E3863", "#12477D", "#1689C9", "#1CBA83", "#68CB54", "#9FD848", "#3E7084", "#639096", "#A9A87B", "#6B8F69", "#5A5D5E", "#F898A4" , "#FCDA9C" , "#F7FAA1" , "#B4F6A4" , "#9BE0F1" , "#A2ACEB" ];


let color = ["#F898A4", "#FCDA9C", "#F7FAA1", "#B4F6A4", "#9BE0F1", "#A2ACEB"];



function iniciar(){
	setInterval(function(){
	for(i = 0, yquad = 0; i<l; i++, yquad = yquad + lquad){
		for(j = 0, xQuad = 0; j<h; j++, xQuad = xQuad + lquad){
			squareColor = Math.floor(Math.random() * color.length);
			document.write(
				"<div id =\"quad_" + j + "_" + i + 
				"\" style=\"position:absolute; background-color:" + color[squareColor] + "; width:" 
				+ lquad + 
				"px; height:" + lquad + 
				"px; left:" + xQuad + "px; top:" + yquad + "px;" +
				"border: solid 1px #000000; \"></div>");

		}
	}
		
}, 100);


}

				



