/*	File:			setup.js
	Author:			Alister macgregor
	Last update:	5 August 2016
	Purpose:		constants and set up functions
					Should not be changed
*/

//constants
const BLANK = "";
const SPACE = "&nbsp;";
const TAB = SPACE.repeat(3);
const NEWLINE = "<br/>";
const INTERFACEAREA = "interface";

function clr() {
// clears the HTML page
    "use strict";
    document.body.style.fontFamily = 'Courier New';
    document.getElementById(INTERFACEAREA).innerHTML = "";
}

function writeBlockToPage(newText) {
// writes a block of text to a page
    "use strict";
    document.getElementById(INTERFACEAREA).innerHTML += newText + NEWLINE;
}

function writeSectionToPage(newText) {
// writes a section of text to a page
    "use strict";
    document.getElementById(INTERFACEAREA).innerHTML += newText;
}

function readFromInputArea(inputID) {
// reads text from an input box
	"use strict"
	console.log(inputID);
	return (document.getElementById(inputID).value);
}

function writeToInputArea(outputID,value) {
// writes text to text area
	"use strict"
	document.getElementById(outputID).value=value;
}

function setup() {
// set up function - do not change
    "use strict";
    clr();
    writeBlockToPage("Page Output...");
	console.log("Console Output");
}

