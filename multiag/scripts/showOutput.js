/*	File:			showOutput.js
	Author:			Rochelle Wilson
	Last update:	
	Purpose:		to hold the code for outputting an output message for MultiAg book services and products
*/

function showOutput() {
		writeBlockToPage("Thank you for your Order and/or Booking Application!" + "<br>");
		
		//code that gets the cost option 
		writeBlockToPage(sessionStorage.getItem('productOutputText'));
		
		// code that gets the service option and shows the corresponding info 
		writeBlockToPage(sessionStorage.getItem('serviceOutputText'));
		
	}