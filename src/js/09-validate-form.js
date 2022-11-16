'use strict';

// validate email
emailInput.addEventListener("input", (e) => {
    e.preventDefault();
    const emailInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !== true) {
        emailInput.style.border = "thin solid red"
    } else {
        emailInput.style.border = "thin solid #a2deaf";
    }
});

// validate phone
phoneInput.addEventListener("input", (e) => {
    e.preventDefault();
    const phoneInputValue = e.currentTarget.value;
    if( /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phoneInputValue) !== true) {
        phoneInput.style.border = "thin solid red"
    } else {
        phoneInput.style.border = "thin solid #a2deaf";
    }
});

// validate linkedIn url
linkedinInput.addEventListener("input", (e) => {
    e.preventDefault();
    const linkedinInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]{5,30}$/.test(linkedinInputValue) !== true) {
        linkedinInput.style.border = "thin solid red"
    } else {
        linkedinInput.style.border = "thin solid #a2deaf";
    }
});

//validate GitHub url
githubInput.addEventListener("input", (e) => {
    e.preventDefault();
    const githubInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]{5,30}$/.test(githubInputValue) !== true) {
        githubInput.style.border = "thin solid red"
    } else {
        githubInput.style.border = "thin solid #a2deaf";
    }
});