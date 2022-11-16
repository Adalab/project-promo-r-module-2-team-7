'use strict';

// validate email
emailInput.addEventListener("input", (e) => {
    e.preventDefault();
    const emailInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !== true) {
        emailInput.style.border = "medium solid #d96863"
    } else {
        emailInput.style.border = "medium solid #f8e055";
    }
});

// validate phone
phoneInput.addEventListener("input", (e) => {
    e.preventDefault();
    const phoneInputValue = e.currentTarget.value;
    if( /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phoneInputValue) !== true) {
        phoneInput.style.border = "medium solid #d96863"
    } else {
        phoneInput.style.border = "medium solid #f8e055";
    }
});

// validate linkedIn url
linkedinInput.addEventListener("input", (e) => {
    e.preventDefault();
    const linkedinInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]{5,30}$/.test(linkedinInputValue) !== true) {
        linkedinInput.style.border = "medium solid #d96863"
    } else {
        linkedinInput.style.border = "medium solid #f8e055";
    }
});

//validate GitHub url
githubInput.addEventListener("input", (e) => {
    e.preventDefault();
    const githubInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]{5,30}$/.test(githubInputValue) !== true) {
        githubInput.style.border = "medium solid #d96863"
    } else {
        githubInput.style.border = "medium solid #f8e055";
    }
});