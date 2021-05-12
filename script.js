window.addEventListener("load", function(){
	var nodeList = document.querySelectorAll("[data-spin]");
	nodeList.forEach(function(node){
		var newNode = document.createElement("span");
		node.appendChild(newNode);
	});
});
