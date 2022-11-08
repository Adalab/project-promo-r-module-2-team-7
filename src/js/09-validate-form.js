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
    if( /^(?:http(?:s)?:\/\/)?(?:www\.|\w\w\.)?linkedin\.com\/((?:in)\/(?:[a-zA-Z0-9-]{5,30}(?:\/)?)|(?:profile\/)(?:view\?id=[0-9]+))?$/.test(linkedinInputValue) !== true) {
        linkedinInput.style.border = "thin solid red"
    } else {
        linkedinInput.style.border = "thin solid #a2deaf";
    }
});

// validate GitHub url
githubInput.addEventListener("input", (e) => {
    e.preventDefault();
    const githubInputValue = e.currentTarget.value;
    if( /^(?:http(?:s)?:\/\/)?(?:www\.|\w\w\.)?github\.com\/\/((?:[a-zA-Z0-9-]{5,30}(?:\/)?)|(?:profile\/)(?:view\?id=[0-9]+))?$/.test(githubInputValue) !== true) {
        githubInput.style.border = "thin solid red"
    } else {
        githubInput.style.border = "thin solid #a2deaf";
    }
});