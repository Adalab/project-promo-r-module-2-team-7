function showAlert(){
    const alertBox = document.createElement('div');
    alertBox.setAttribute('class', 'js-alert-box');
    const alertBoxText = document.createElement('p');
    alertBoxText.setAttribute('class', 'js-alert-text')
    const alertBoxMsg = document.createTextNode('Por favor, verifica que has rellenado todos los campos obligatorios.');
    alertBoxText.appendChild(alertBoxMsg);
    const alertBtn = document.createElement('button');
    alertBtn.setAttribute('class', 'js-alert-btn');
    const alertBtnMsg = document.createTextNode('Aceptar');
    alertBtn.appendChild(alertBtnMsg);
    alertBox.appendChild(alertBoxText);
    alertBox.appendChild(alertBtn);
    const body = document.querySelector('body');
    body.appendChild(alertBox);
}


