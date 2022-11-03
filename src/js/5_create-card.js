"use strict";

const designHead = document.querySelector(".js-design-head");
const designBigBox = document.querySelector(".js-design-big-box");
const fillHead = document.querySelector(".js-fill-head");
const fillBigBox = document.querySelector(".js-fill-big-box");
const shareHead = document.querySelector(".js-share-head");
const shareBigBox = document.querySelector(".js-share-big-box");
const designArrowUp = document.querySelector(".js-design-arrow-up");
const designArrowDown = document.querySelector(".js-design-arrow-down");
const fillArrowUp = document.querySelector(".js-fill-arrow-up");
const fillArrowDown = document.querySelector(".js-fill-arrow-down");
const shareArrowUp = document.querySelector(".js-share-arrow-up");
const shareArrowDown = document.querySelector(".js-share-arrow-down");

function designOpen() {
	designBigBox.classList.remove("collapsed");
	designArrowDown.classList.remove("collapsed");
	designArrowUp.classList.add("collapsed");
}
function fillOpen() {
	fillBigBox.classList.remove("collapsed");
	fillArrowDown.classList.remove("collapsed");
	fillArrowUp.classList.add("collapsed");
}
function shareOpen() {
	shareBigBox.classList.remove("collapsed");
	shareArrowDown.classList.remove("collapsed");
	shareArrowUp.classList.add("collapsed");
}
function designClose() {
	designBigBox.classList.add("collapsed");
	designArrowDown.classList.add("collapsed");
	designArrowUp.classList.remove("collapsed");
}
function fillClose() {
	fillBigBox.classList.add("collapsed");
	fillArrowDown.classList.add("collapsed");
	fillArrowUp.classList.remove("collapsed");
}
function shareClose() {
	shareBigBox.classList.add("collapsed");
	shareArrowDown.classList.add("collapsed");
	shareArrowUp.classList.remove("collapsed");
}
function alwaysOpenDesign (){
     if((fillBigBox.classList.contains('collapsed') )&& (shareBigBox.classList.contains('collapsed'))){
        console.log('AQUI NO');
        designOpen();

        
    } 
}
function handleClickCollapsablesDesign(event) {
	event.preventDefault();
 
	if (designBigBox.classList.contains("collapsed")) {
		
		designOpen();
		fillClose();
		shareClose();
	} else {
		designClose();
	}
    alwaysOpenDesign();
}

function handleClickCollapsablesFill(event) {
	event.preventDefault();
  
	if (fillBigBox.classList.contains("collapsed")) {
		fillOpen();
		designClose();
		shareClose();
	} else {
		fillClose();
	}
    alwaysOpenDesign();
}

function handleClickCollapsablesShare(event) {
	event.preventDefault();
    
	if (shareBigBox.classList.contains("collapsed")) {
		shareOpen();
		fillClose();
		designClose();
	} else {
		shareClose();
	}
    alwaysOpenDesign();
}

fillHead.addEventListener("click", handleClickCollapsablesFill);
shareHead.addEventListener("click", handleClickCollapsablesShare);
designHead.addEventListener("click", handleClickCollapsablesDesign);
