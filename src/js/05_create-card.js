'use strict';

const createButton = document.querySelector('.js-create-button');
const shareResultBox = document.querySelector('.js-share-result-box');


createButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('EUREKA'); ///
    createButton.classList.add('createbutton-of');
    createButton.classList.remove('createbutton-on');
    shareResultBox.classList.remove('collapsed');
    
  });

const designBigBox = document.querySelector('.js-design-big-box');
const fillBigBox = document.querySelector('.js-fill-big-box');
const shareBigBox = document.querySelector('.js-share-big-box');
const  designHead = document.querySelector('.js-design-head');
const  fillHead = document.querySelector('.js-fill-head');
const  shareHead = document.querySelector('.js-share-head');
const designArrow =document.querySelector ('.js-design-arrow');
const fillArrow =document.querySelector ('.js-fill-arrow');
const shareArrow =document.querySelector ('.js-share-arrow');

designHead.addEventListener('click', (event) => {
    
    event.preventDefault()
    console.log('EUREKA BABY'); ///

    if (shareBigBox.classList.contains('collapsed')) {
        shareBigBox.classList.remove('collapsed');
    } else {
     
    }
     shareBigBox.classList.add('collapsed');
    fillBigBox.classList.add('collapsed');
    designBigBox.classList.remove('collapsed');
   
  });

  fillHead.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('EUREKA OLE OLE'); ///
    fillBigBox.classList.remove('collapsed');
    designBigBox.classList.add('collapsed');
    shareBigBox.classList.add('collapsed');
   
    if ( fillHead.classList.contains('collapsed')){
        fillArrow.classList.add('flip');
    }
    else{
        fillArrow.classList.remove('flip');
    }
  });

  shareHead.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('EUREKA  YIHA'); ///
    shareBigBox.classList.remove('collapsed');
    designBigBox.classList.add('collapsed');
    fillBigBox.classList.add('collapsed');
    if ( shareBigBox.classList.contains('collapsed')){
        console.log ('añade flip');
        designArrow.classList.add('flip');
    }
    else if (!( shareBigBox.classList.contains('collapsed')) ){
        console.log ('quita flip');
        fillArrow.classList.remove('flip');
    }
  });

