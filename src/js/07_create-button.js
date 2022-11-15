'use strict';

//Function to change button style
function changeBtnStyle() {
    if(createButton.classList.contains('createbutton-on')){
        createButton.classList.remove('createbutton-on');
        createButton.classList.add('createbutton-of');
    }else{
        createButton.classList.add('createbutton-on');
        createButton.classList.remove('createbutton-of');
    }
}


//Main function to get card URL
function handleCreateClick (event) {
    event.preventDefault(); 
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', // Para enviar datos
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
    })
        .then((response)=> response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            if(responseJson.success){
                changeBtnStyle();
                shareResultBox.classList.remove('collapsed');
                const urlJson = responseJson.cardURL;
                linkTwitter.href = `https://twitter.com/intent/tweet?text=Hola,%20os%20comparto%20mi%20tarjeta:%0a&url=${urlJson}`;
                shareUrl.href = urlJson;
                shareUrl.innerHTML = urlJson;
            }else{
                //Alert 
                alert('Por favor, verifica que has rellenado todos los campos obligatorios.');
                //Hide share section
                shareBigBox.classList.add('collapsed');
                shareArrowUp.classList.remove('collapsed');
                shareArrowDown.classList.add('collapsed');
                //Open fill section
                fillBigBox.classList.remove('collapsed');
                fillArrowUp.classList.add('collapsed');
                fillArrowDown.classList.remove('collapsed');
            }
    });  
}


//Event listener create button
createButton.addEventListener('click', handleCreateClick);



