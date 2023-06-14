import './styles.css';
import LePizza from './LePizza.jpg'


function index() {
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

    let home = document.createElement('button');
    home.id = 'home';
    home.classList.add('navButton');
    home.textContent = 'Home';
    home.addEventListener('mouseover', function () {
        selected(home);
    });

    let menu = document.createElement('button');
    menu.id = 'menu';
    menu.classList.add('navButton');
    menu.textContent = 'Menu';
    menu.addEventListener('mouseover', function () {
        selected(menu)
    });

    let contact = document.createElement('button');
    contact.id = 'contact';
    contact.classList.add('navButton');
    contact.textContent = 'Contact';
    contact.addEventListener('mouseover', function () {
        selected(contact)
    });

    tabsContainer.append(home, menu, contact);

    header.append(title);
    header.append(tabsContainer);
    content.append(header)
    document.body.append(content)
}

index();

function selected(tab) {
    tab.classList.add('selected');
}
