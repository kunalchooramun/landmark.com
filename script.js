// JavaScript Documentnameerror
var nameError = Document.getElementById('name-error');
var emailError = Document.getElementById('email-error');
var subjectError= Document.getElementById('subject-error');				
var messageError = Document.getElementById('message-error');			   
var submitError = Document.getElementById('submit-error');

function validateName(){
	var name= document.getElementById('contact-name').value;
	
	if (name.length==0){
		nameError.innerHTML='Name is required';
		return false;
	}
	if (!name.match(/^[A-Za-z]*\s{1}{A-Za-z}*$/)){
		nameError.innerHTML='Write full name';
		return false;
	}
	nameError.innerHTML='valid';
	return true;
}
 