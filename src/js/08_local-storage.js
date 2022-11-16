
const savedData = localStorage.getItem('datainputs');

function renderData(data){
    //Inputs
    nameInput.value = data.name;
    jobInput.value = data.job;
    emailInput.value = data.email;
    phoneInput.value = data.phone;
    linkedinInput.value = data.linkedin;
    githubInput.value = data.github;
    //Name
	if(data.name === ''){
		previewArticleTitle.innerHTML = "Nombre Apellido";
	}else{
		previewArticleTitle.innerHTML = data.name;
	}
	//Job
	if(data.job === ''){
		previewArticleSubtitle.innerHTML = "Front-end developer";
	}else{
		previewArticleSubtitle.innerHTML = data.job;
	}
	//Phone
	if(data.phone === ''){
		previewArticlePhone.href = `tel:${"#"}`;
	}else{
		previewArticlePhone.href = `tel:${data.phone}`; 
	}
	//Email
	if(data.email === ''){
		previewArticleMail.href = `mailto:${"#"}`;
	}else{
		previewArticleMail.href = `mailto:${data.email}`;
	}
	//Linkedin
	if(data.linkedin === ''){
		previewArticleLinkedin.href = "#";
	}else{
		previewArticleLinkedin.href  = data.linkedin;
	}
	//Github
	if(data.github === ''){
		previewArticleGitHub.href = "#";
	}else{
		previewArticleGitHub.href  = data.github;
	}
}

if(savedData !== null){
    renderData(JSON.parse(savedData));
}

console.log(JSON.parse(savedData))