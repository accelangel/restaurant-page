import { navigator } from './index'

function populateHome() {
    let mainContainer = document.getElementById('mainContainer');
    let homeContainer =  document.createElement('div');
    homeContainer.classList.add('home');
    mainContainer.appendChild(homeContainer);
};

export { populateHome };
