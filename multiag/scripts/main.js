/*	File:			main.js
	Author:			Rochelle Wilson
	Last update:	
	Purpose:		for getting what the user inputted and producing the corresponding item 
*/

function main() {
// Main runner function - runs the program
// addEventListener tells the browser to check to see if a value has changed
	"use strict";

	// makes the small squares work
	document.getElementById("smallPeastrawAmount").addEventListener("change", function() {updateProductCost("smallPeastraw");});
	document.getElementById("smallLucerneAmount").addEventListener("change", function() {updateProductCost("smallLucerne");});
	document.getElementById("smallHayAmount").addEventListener("change", function() {updateProductCost("smallHay");});
	
	// makes the big bales work 
	document.getElementById("bigStrawAmount").addEventListener("change", function() {updateProductCost("bigStraw");});
	document.getElementById("bigHayAmount").addEventListener("change", function() {updateProductCost("bigHay");});
	
	// makes the wrapped bales work
	document.getElementById("wrappedLucerneAmount").addEventListener("change", function() {updateProductCost("wrappedLucerne");});
	document.getElementById("wrappedGrassAmount").addEventListener("change", function() {updateProductCost("wrappedGrass");});
	
	// makes the services options work 
	document.getElementById("serviceOptions").addEventListener("change", function() {updateService("service");});
	
}

function checkForm(form) {
	"use strict"
		var pageOK=true;
		
	// Users don't have to buy/order one of everything, but one thing at least needs to be filled in 
		// says page is false if each item has nothing it it
		if ((form.serviceOptions.value=="") && 														// no services were chosen
			((form.smallPeastrawAmount.value=="0") || (form.smallPeastrawAmount.value=="")) &&
			((form.smallLucerneAmount.value=="0") || (form.smallLucerne.value=="")) &&
			((form.smallHayAmount.value=="0") || (form.smallHayAmount.value=="")) &&				// and no small square types
			((form.bigStrawAmount.value=="0") || (form.bigStrawAmount.value=="")) &&
			((form.bigHayAmount.value=="0") || (form.bigHayAmount.value=="")) &&					// and no big bale types
			((form.wrappedLucerneAmount.value=="0") || (form.wrappedLucerneAmount.value=="")) &&
			((form.wrappedGrassAmount.value=="0")) || (form.wrappedGrassAmount.value=="")) {		// and no wrapped bale types
			
			alert("You didn't try to buy anything");
			pageOK=false;
		}
		
		sessionStorage.setItem('totalCost',form.totalCost.value);
		
	
		return pageOK;
		
}

