'use strict';

const createButton = document.querySelector('.js-create-button');
const shareResultBox = document.querySelector('.js-share-result-box');
const shareUrl = document.querySelector('.js-share-url');

//
function changeBtnStyle() {
    createButton.classList.add('createbutton-of');
    createButton.classList.remove('createbutton-on');
}

//
function handleClick (event) {
    event.preventDefault(); 
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', // Para enviar datos
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        if(responseJson.success){
            console.log(responseJson);
            changeBtnStyle();
            shareResultBox.classList.remove('collapsed');
            const urlJson = responseJson.cardURL;
            shareUrl.href = urlJson;
            shareUrl.innerHTML = urlJson;
        }else{
            console.log(responseJson);
            console.log('Macarena');
        }
    });
    
}

//
createButton.addEventListener('click', handleClick);



