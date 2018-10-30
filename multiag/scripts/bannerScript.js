/*	File:			bannerScript.js
	Author:			Rochelle Wilson
	Last update:	
	Purpose:		for making the banner change automatically every 2 seconds  
*/


var myIndex = 0;

function automaticBanner() {
    var i;
    var x = document.getElementsByClassName("slideshowBanner");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(automaticBanner, 2000); // Change image every 2 seconds


}