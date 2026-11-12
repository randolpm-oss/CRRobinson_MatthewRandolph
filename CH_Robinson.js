//CH Robinson technical interview

//This is the back end file that retreives a user entered country code and 
//returns a list of countrys needed to be passed through to get there from the USA 

//CH_Robinson.js
//Matthew Randolph

$(main);

//loading the predetermined routes and setting up the submit button event listener
function main(){
	loadRoutes();
	$("#getRoute").click(displayPath);
}

//displaying the route associated with the country code entered
function displayPath(e){
	console.log("buttonClicked");
    
    //getting the user typed information and converting it to upper case
	let enteredDest = $("#cc");
  	let destCode = enteredDest.val().toUpperCase();

	//getting the route from local storage, if there is no path display a error message to the user
  	let path = JSON.parse(localStorage.getItem(destCode));
  	
  	if (path == null){
  		$("#pathInfo").html("<ul><li> Please enter a valid code to recive your route </li></ul>");
  		return;
  	}

	//creating the ul to display
  	let pathContext="<ul>";
  	for (let stop of path){
  		pathContext += "<li>" + stop + "</li>";
  	}
  	
  	pathContext += "</ul>"
  	
  	$("#pathInfo").html(pathContext);
}

//loading the routes into local storage
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
