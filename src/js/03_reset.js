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
	//Preview article
	previewArticleTitle.innerHTML = "Nombre Apellido";
	previewArticleSubtitle.innerHTML = "Front-end developer";
	previewArticlePhoto.style = ''; //Verify if it works once merge get-Avatar has been done
	previewArticlePhone.href = `tel:${"#"}`;
	previewArticleMail.href = `mailto:${"#"}`;
	previewArticleLinkedin.href = "#";
	previewArticleGitHub.href = "#";
	//Reset to palette one
	paletteOne.checked = true;
	paletteTwo.checked = false;
	paletteThree.checked = false;
	previewArticleElement.classList.remove("paletteTwo");
	previewArticleElement.classList.remove("paletteThree");
	previewArticleElement.classList.add("paletteOne");
});

