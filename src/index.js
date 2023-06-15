import './styles.css';
import { initialize } from './initial';
import { populateHome } from './home';
import { populateMenu } from './menu';
import { populateContact } from './contact';

initialize();
populateHome();

function navigator(tab) {
    tab.classList.add('selected');
    if (tab === menuTab) {
        tab.classList.add('selected');
        homeTab.classList.remove('selected');
        contactTab.classList.remove('selected');
        mainContainer.innerHTML = '';
        populateMenu();
    } 
    else if (tab === contactTab) {
        tab.classList.add('selected');
        homeTab.classList.remove('selected');
        menuTab.classList.remove('selected');
        mainContainer.innerHTML = '';
        populateContact();
    }
    else {
        tab.classList.add('selected');
        menuTab.classList.remove('selected');
        contactTab.classList.remove('selected');
        mainContainer.innerHTML = '';
        populateHome();
    }
};

export { navigator };
