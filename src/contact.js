import { navigator } from './index'

function populateContact() {
    let mainContainer = document.getElementById('mainContainer');
    let contactContainer =  document.createElement('div');
    contactContainer.classList.add('contact');
    mainContainer.appendChild(contactContainer);
    
};

export { populateContact }
