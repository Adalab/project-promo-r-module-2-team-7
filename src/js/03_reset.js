"use strict";

//Even listener for reset button, empty all inputs
resetBtn.addEventListener("click", (event) => {
	event.preventDefault();
	//Inputs form
	nameInput.value = '';
	jobInput.value = '';
	emailInput.value = '';
	phoneInput.value = '';
	linkedinInput.value = '';
	githubInput.value = '';
	boxInput.style = '';
	//Preview article
	previewArticleTitle.innerHTML = "Minion Stuart";
	previewArticleSubtitle.innerHTML = "Despicable villain";
	previewArticlePhoto.style = "./images/b8766cd53b5e1529712ed7e49365b7d4.jpg"; //Verify if it works once merge get-Avatar has been done
	previewArticlePhone.href = `tel:${"#"}`;
	previewArticleMail.href = `mailto:${"#"}`;
	previewArticleLinkedin.href = "#";
	previewArticleGitHub.href = "#";
	//Reset to palette one
	paletteOne.checked = true;
	previewArticleElement.classList.remove("palette-2");
	previewArticleElement.classList.remove("palette-3");
	previewArticleElement.classList.add("palette-1");
	//Empty share section
	linkTwitter.href = '#';
    shareUrl.href = '#';
    shareUrl.innerHTML = '';
	//Hide share button and restore class
	shareResultBox.classList.add('collapsed');
	createButton.classList.add('createbutton-on');
	//Hide share section
	shareBigBox.classList.add('collapsed');
	shareArrowUp.classList.remove('collapsed');
	shareArrowDown.classList.add('collapsed');
	//Hide fill section
	fillBigBox.classList.add('collapsed');
    fillArrowUp.classList.remove('collapsed');
    fillArrowDown.classList.add('collapsed');
	//Open design section
	designBigBox.classList.remove('collapsed');
	designArrowUp.classList.add('collapsed');
	designArrowDown.classList.remove('collapsed');
	//
	data = {
		palette: '1',
		name: '',
		job: '',
		phone: '',
		email: '',
		linkedin: '',
		github: '',
		photo: './assets/images/b8766cd53b5e1529712ed7e49365b7d4.jpg',
	};
	
	//Empty local storage
	savedData = localStorage.setItem('datainputs', JSON.stringify(data));
	savedData = localStorage.removeItem('datainputs');
});

