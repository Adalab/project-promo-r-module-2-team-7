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
	previewArticleTitle.innerHTML = "Nombre Apellido";
	previewArticleSubtitle.innerHTML = "Front-end developer";
	previewArticlePhoto.style = "./images/profile-picture.jpg"; //Verify if it works once merge get-Avatar has been done
	previewArticlePhone.href = `tel:${"#"}`;
	previewArticleMail.href = `mailto:${"#"}`;
	previewArticleLinkedin.href = "#";
	previewArticleGitHub.href = "#";
	//Reset to palette one
	paletteOne.checked = true;
	paletteTwo.checked = false;
	paletteThree.checked = false;
	previewArticleElement.classList.remove("palette-2");
	previewArticleElement.classList.remove("palette-3");
	previewArticleElement.classList.add("palette-1");
	//Empty share section
	linkTwitter.href = '#';
    shareUrl.href = '#';
    shareUrl.innerHTML = '';
	//Hide share button and restore class
	shareResultBox.classList.add('collapsed');
	changeBtnStyle();
	//Hide share section
	shareBigBox.classList.add('collapsed');
	shareArrowUp.classList.remove('collapsed');
	shareArrowDown.classList.add('collapsed');
	//Open design section
	designBigBox.classList.remove('collapsed');
	designArrowUp.classList.add('collapsed');
	designArrowDown.classList.remove('collapsed');
});

