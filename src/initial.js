import { navigator } from './index';
import LePizza from './LePizza.jpg'

function initialize() {
    //create the content div element
    let content = document.createElement('div');
    content.id = 'content';
    content.classList.add('content');

    //create the background image
    const pic = new Image();
    pic.src = LePizza;
    content.appendChild(pic);

    //create header
    let header = document.createElement('div');
    header.id = 'header';
    header.classList.add('header');

    //create LePizza napoletana ristorante title
    let title = document.createElement('h1');
    title.id = 'title';
    title.classList.add('title');
    title.textContent = 'LePizza Napoletana Ristorante';

    //create nav tabs
    let tabsContainer = document.createElement('div');
    tabsContainer.id = 'tabsContainer';
    tabsContainer.classList.add('tabsContainer');

    let homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.classList.add('navButton');
    homeTab.textContent = 'Home';
    homeTab.classList.add('selected');
    homeTab.addEventListener('click', function () {
        navigator(homeTab);
    });

    let menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.classList.add('navButton');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click', function () {
        navigator(menuTab);
    });

    let contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.classList.add('navButton');
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', function () {
        navigator(contactTab);
    });

    let mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.classList.add('mainContainer');

    tabsContainer.append(homeTab, menuTab, contactTab);

    header.append(title, tabsContainer);
    content.append(header, mainContainer);
    document.body.append(content)
};

export { initialize };