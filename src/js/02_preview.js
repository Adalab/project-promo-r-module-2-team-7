'use strict';


//Create object for form inputs

const data = {
	palette: '',
	name: '',
	job: '',
	phone: '',
	email: '',
	linkedin: '',
	github: '',
	photo: '',
};

//Create function to update article

function updatePreview (){
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
	//Photo

}

//Event listener in form 

formElement.addEventListener('input', (event)=>{
	//Create variables for inputs related to name attribute & value
	const elementName = event.target.name;
	const value = event.target.value;
	//Get input values according to target
	if(elementName === "name"){
		data.name = value;
	}else if(elementName === "job"){
		data.job = value;
	}else if(elementName === "phone"){
		data.phone = value;
	}else if(elementName === "email"){
		data.email = value;
	}else if(elementName === "linkedin"){
		data.linkedin = value;
	}else if(elementName === "github"){
		data.github = value;
	}
	//Update article
	updatePreview ();
	//Photo to be added
});