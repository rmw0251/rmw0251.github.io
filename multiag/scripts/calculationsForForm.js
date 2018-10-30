/*	File:			calculationsForForm.js
	Author:			Rochelle Wilson
	Last update:	
	Purpose:		for the calculations
*/
		function updateProductCost(rowName) {
		"use strict";
			var inputName = rowName + "Amount";
			var outputName = rowName + "Cost";
			var inputValue = readFromInputArea(inputName);
			var inputCost;
			switch (rowName) {
			case "smallPeastraw":
				inputCost=5;
				break;
			case "smallLucerne":
				inputCost=10;
				break;
			case "smallHay":
				inputCost=7;
				break;
			case "bigStraw":
				inputCost=50;
				break;
			case "bigHay":
				inputCost=60;
				break;
			case "wrappedLucerne":
				inputCost=70;
				break;
			case "wrappedGrass":
				inputCost=70;
				break;
			default:
				alert ("You haven't coded this yet");
			} 
			
			var outputValue = inputValue * inputCost;
			writeToInputArea(outputName,outputValue);
			
		// Add everything up
			calculateTotals();
			
		}
		
		function calculateTotals() {
			"use strict";
			// calculate the total compost
			var totalSmallPeastraw = readFromInputArea("smallPeastrawCost");
			var totalSmallLucerne = readFromInputArea("smallLucerneCost");
			var totalSmallHay = readFromInputArea("smallHayCost");
			var totalBigStraw = readFromInputArea("bigStrawCost");
			var totalBigHay = readFromInputArea("bigHayCost");
			var totalWrappedLucerne = readFromInputArea("wrappedLucerneCost");
			var totalWrappedGrass = readFromInputArea("wrappedGrassCost");
			
			var outputTotal = Number(totalSmallPeastraw) + Number(totalSmallLucerne) + Number(totalSmallHay) + Number(totalBigStraw) + Number(totalBigHay) + Number(totalWrappedLucerne) + Number(totalWrappedGrass);
			writeToInputArea("totalCost",outputTotal);
			var outputText = ("The Total Cost for Products chosen is $" + outputTotal + "<br>");
			sessionStorage.setItem('productOutputText',outputText);
			
		}
		
		function updateService(service) {
			"use strict";
			// function for determing the service option selected and adding text to be outputted in the thankYouForm
			
			var serviceChosen = readFromInputArea("serviceOptions");
			
			if (serviceChosen == "spraying") {
				var outputText = "Contact Craig Wilson on 0273522062 for all Spraying needs.";
				sessionStorage.setItem('serviceOutputText',outputText);
			}
			
			if (serviceChosen == "engineering") {
				var outputText = "Contact Scott Wilson on 0273522040 for all Engineering needs.";
				sessionStorage.setItem('serviceOutputText',outputText);
			}
			
			if (serviceChosen == "baling") {
				var outputText = "Contact Craig on 0273522062, or Scott on 0273522040 for all Baling needs.";
				sessionStorage.setItem('serviceOutputText',outputText);
			}
			
			if (serviceChosen == "balingRakingMowing") {
				var outputText = "Contact Craig on 0273522062, or Scott on 0273522040 if you require Mowing, Raking and Baling.";
				sessionStorage.setItem('serviceOutputText',outputText);
			}
			
		}
		