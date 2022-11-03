"use strict";

const designHead = document.querySelector('.js-design-head');
const designBigBox = document.querySelector('.js-design-big-box');
const fillHead = document.querySelector('.js-fill-head');
const fillBigBox = document.querySelector('.js-fill-big-box');
const shareHead = document.querySelector('.js-share-head');
const shareBigBox = document.querySelector('.js-share-big-box');
const designArrowUp = document.querySelector('.js-design-arrow-up');
const designArrowDown = document.querySelector('.js-design-arrow-down');
const fillArrowUp = document.querySelector('.js-fill-arrow-up');
const fillArrowDown = document.querySelector('.js-fill-arrow-down');
const shareArrowUp = document.querySelector('.js-share-arrow-up');
const shareArrowDown = document.querySelector('.js-share-arrow-down');


function handleClickCollapsablesDesign (event){
    event.preventDefault();
    if (designBigBox.classList.contains('collapsed')){
        console.log('AQUI');
        designBigBox.classList.remove('collapsed');
        designArrowDown.classList.remove('collapsed');
        designArrowUp.classList.add('collapsed');
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.add('collapsed');
        shareArrowUp.classList.remove('collapsed');
    }
       /* i'm not sure if this else if does anything, i try to force it to have at least open design */
    /* else if((fillBigBox.classList.contains('collapsed') )&& (shareBigBox.classList.contains('collapsed'))){
        console.log('AQUI NO');

        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
    } */
    else{
        ('AQUI SI');
        designBigBox.classList.add('collapsed');
        designArrowDown.classList.add('collapsed');
        designArrowUp.classList.remove('collapsed');
    }
  }; 

  function handleClickCollapsablesFill (event){
    event.preventDefault();
    if (fillBigBox.classList.contains('collapsed')){
        fillBigBox.classList.remove('collapsed');
        fillArrowDown.classList.remove('collapsed');
        fillArrowUp.classList.add('collapsed');
        designBigBox.classList.add('collapsed');
        designArrowDown.classList.add('collapsed');
        designArrowUp.classList.remove('collapsed');
        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.add('collapsed');
        shareArrowUp.classList.remove('collapsed');
    }
       /* i'm not sure if this else if does anything, i try to force it to have at least open design */
    else if((fillBigBox.classList.contains('collapsed') )&& (shareBigBox.classList.contains('collapsed'))){
        designBigBox.classList.remove('collapsed');
        designArrowDown.classList.remove('collapsed');
        designArrowUp.classList.add('collapsed');
        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
    }
    else{
     
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
    }
  }; 
  
  function handleClickCollapsablesShare (event){
    event.preventDefault();
    if (shareBigBox.classList.contains('collapsed')){
        shareBigBox.classList.remove('collapsed');
        shareArrowDown.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
         designBigBox.classList.add('collapsed');
         designArrowDown.classList.add('collapsed');
         designArrowUp.classList.remove('collapsed');
    }
     /* i'm not sure if this else if does anything, i try to force it to have at least open design */
    else if((fillBigBox.classList.contains('collapsed') )&& (shareBigBox.classList.contains('collapsed'))){
        designBigBox.classList.remove('collapsed');
        designArrowDown.classList.remove('collapsed');
        designArrowUp.classList.add('collapsed');
        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        fillBigBox.classList.add('collapsed');
        fillArrowDown.classList.add('collapsed');
        fillArrowUp.classList.remove('collapsed');
    }
    else{

        shareBigBox.classList.add('collapsed');
        shareArrowDown.classList.add('collapsed');
        shareArrowUp.classList.remove('collapsed');
    }
  }

 

fillHead.addEventListener('click', handleClickCollapsablesFill) ;
shareHead.addEventListener('click', handleClickCollapsablesShare) ;
designHead.addEventListener('click', handleClickCollapsablesDesign) ;

