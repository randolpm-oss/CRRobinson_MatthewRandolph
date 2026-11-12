$(main);

function main(){
	loadRoutes();
	$("#getRoute").click(displayPath);
}

function displayPath(e){
	console.log("buttonClicked");
    
    //getting the user typed information
    let enteredDest = $("#cc");
  	let destCode = enteredDest.val().toUpperCase();
  	
  	let path = JSON.parse(localStorage.getItem(destCode));
  	
  	if (path == null){
  		$("#pathInfo").html("<ul><li> Not a Valid Destination </li></ul>");
  		return;
  	}
  	
  	let pathContext="<ul>";
  	for (let stop of path){
  		pathContext += "<li>" + stop + "</li>";
  	}
  	
  	pathContext += "</ul>"
  	
  	$("#pathInfo").html(pathContext);
}

function loadRoutes(){
	localStorage.setItem("CAN", JSON.stringify(["USA","CAN"]));
    localStorage.setItem("USA", JSON.stringify(["USA"]));
    localStorage.setItem("MEX", JSON.stringify(["USA", "MEX"]));
    localStorage.setItem("BLZ", JSON.stringify(["USA", "MEX", "BLZ"]));
    localStorage.setItem("GTM", JSON.stringify(["USA", "MEX", "GTM"]));
    localStorage.setItem("SLV", JSON.stringify(["USA", "MEX", "GTM", "SLV"]));
    localStorage.setItem("HND", JSON.stringify(["USA", "MEX", "GTM", "HND"]));
    localStorage.setItem("NIC", JSON.stringify(["USA", "MEX", "GTM", "HND","NIC"]));
    localStorage.setItem("CRI", JSON.stringify(["USA", "MEX", "GTM", "HND","NIC","CRI"]));
    localStorage.setItem("PAN", JSON.stringify(["USA", "MEX", "GTM", "HND","NIC","CRI","PAN"]));
}
