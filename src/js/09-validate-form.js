'use strict';

// function handleValidateEmail(mail) {
//   if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))) {
//     return (true);
//   }
//     alert("You have entered an invalid email address!");
//     return (false);
// }

// validate email
emailInput.addEventListener("input", (e) => {
    e.preventDefault();
    const emailInputValue = e.currentTarget.value;
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !== true) {
        emailInput.style.border = "thin solid red";
        addInvalidMsg(e.currentTarget);
    } else {
        emailInput.style.border = "thin solid #a2deaf";
        delInvalidMsg(e.currentTarget); 
    }
});

// validate phone
phoneInput.addEventListener("change", (e) => {
    e.preventDefault();
    const phoneInputValue = e.currentTarget.value;
    if (/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phoneInputValue) !== true) {
        phoneInput.style.border = "thin solid red";
        addInvalidMsg(e.currentTarget);
    } else{
        phoneInput.style.border = "thin solid #a2deaf";
        delInvalidMsg(e.currentTarget); 
    }
});

// validate linkedIn url
linkedinInput.addEventListener("input", (e) => {
    e.preventDefault();
    const linkedinInputValue = e.currentTarget.value;
    if (/^[a-zA-Z0-9._-]{5,30}$/.test(linkedinInputValue) !== true) {
        linkedinInput.style.border = "thin solid red";
        addInvalidMsg(e.currentTarget);
    } else {
        linkedinInput.style.border = "thin solid #a2deaf";
        delInvalidMsg(e.currentTarget); 
    }
});

//validate GitHub url
githubInput.addEventListener("input", (e) => {
    e.preventDefault();
    const githubInputValue = e.currentTarget.value;
    if (/^[a-zA-Z0-9._-]{5,30}$/.test(githubInputValue) !== true) {
        githubInput.style.border = "thin solid red"
        addInvalidMsg(e.currentTarget);
    } else {
        githubInput.style.border = "thin solid #a2deaf";
        delInvalidMsg(e.currentTarget); 
    }
});


//Function to add invalid message
function addInvalidMsg(event) {
    for (const inv of allInvalids) {
        if (inv.id === event.id) {
            inv.classList.remove('js-hidden');
        }
    }
}

//Function to remove invalid message
function delInvalidMsg(event) {
    for (const inv of allInvalids) {
        if (inv.id === event.id) {
            inv.classList.add('js-hidden');
        }
    }
}

//Empty array for all invalid messages
let allInvalids = [];

//Function to add HTML element to DOM for invalid messages after each input element
function addInvalidEl() {
    const allInputs = document.querySelectorAll('.fill__div__input');
    for (const input of allInputs) {
        const invalidMsg = document.createElement('small');
        invalidMsg.setAttribute('class', 'js-invalid-msg js-hidden');
        invalidMsg.setAttribute('id', input.id);
        const invalidMsgText = document.createTextNode('*Campo no válido');
        invalidMsg.appendChild(invalidMsgText);
        input.parentNode.insertBefore(invalidMsg, input.nextSibling);
        allInvalids.push(invalidMsg);
    }
}

//Execute previous function
addInvalidEl();
