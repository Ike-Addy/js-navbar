const mainDiv = document.createElement('div');
const navOptions = document.createElement('ul');
const home = document.createElement('li');
home.textContent = 'HOME';
const about = document.createElement('li');
about.textContent = 'ABOUT';
const contact = document.createElement('li');
contact.textContent = 'CONTACT';
navOptions.append(home, about, contact);
mainDiv.style.height = '15vh';
mainDiv.style.width = '90vw';
mainDiv.style.border = '2px solid black';
mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'center';
// Add home, about, and contact




document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
mainDiv.appendChild(navOptions);
document.body.appendChild(mainDiv);