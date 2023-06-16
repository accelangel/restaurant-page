import { navigator } from './index'
import bruschetta from './bruschetta.png'
import pizza from './pizza.png'
import lasagna from './lasagna.png'
import spaghetti from './spaghetti.png'
import caprese from './caprese.png'
import tiramisu from './tiramisu.png'

function populateMenu() {
    let mainContainer = document.getElementById('mainContainer');
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');
    let item4 = document.createElement('div');
    let item5 = document.createElement('div');
    let item6 = document.createElement('div');
    item1.classList.add('menuItem');
    item2.classList.add('menuItem');
    item3.classList.add('menuItem');
    item4.classList.add('menuItem');
    item5.classList.add('menuItem');
    item6.classList.add('menuItem');

    let dish1 = document.createElement('img');
    let dish2 = document.createElement('img');
    let dish3 = document.createElement('img');
    let dish4 = document.createElement('img');
    let dish5 = document.createElement('img');
    let dish6 = document.createElement('img');
    let dishBox1 = document.createElement('div');
    let dishBox2 = document.createElement('div');
    let dishBox3 = document.createElement('div');
    let dishBox4 = document.createElement('div');
    let dishBox5 = document.createElement('div');
    let dishBox6 = document.createElement('div');
    dishBox1.classList.add('dishBox1');
    dishBox2.classList.add('dishBox2');
    dishBox3.classList.add('dishBox3');
    dishBox4.classList.add('dishBox4');
    dishBox5.classList.add('dishBox5');
    dishBox6.classList.add('dishBox6');
    dishBox1.append(dish1);
    dishBox2.append(dish2);
    dishBox3.append(dish3);
    dishBox4.append(dish4);
    dishBox5.append(dish5);
    dishBox6.append(dish6);
    dish1.src = bruschetta;
    dish2.src = pizza;
    dish3.src = lasagna;
    dish4.src = spaghetti;
    dish5.src = caprese;
    dish6.src = tiramisu;
    item1.append(dishBox1)
    item2.append(dishBox2);
    item3.append(dishBox3);
    item4.append(dishBox4);
    item5.append(dishBox5);
    item6.append(dishBox6);
    
    let name1 = document.createElement('h3');
    let name2 = document.createElement('h3');
    let name3 = document.createElement('h3');
    let name4 = document.createElement('h3');
    let name5 = document.createElement('h3');
    let name6 = document.createElement('h3');
    name1.textContent = 'Antipasto Bruschette';
    name2.textContent = 'LePizza Napoleon';
    name3.textContent = 'Lasagna';
    name4.textContent = 'Spaghetti Pomodoro';
    name5.textContent = 'Insalata Caprese';
    name6.textContent = 'Torta Tiramisù';
    item1.append(name1);
    item2.append(name2);
    item3.append(name3);
    item4.append(name4);
    item5.append(name5);
    item6.append(name6);

    let description1 = document.createElement('p');
    let description2 = document.createElement('p');
    let description3 = document.createElement('p');
    let description4 = document.createElement('p');
    let description5 = document.createElement('p');
    let description6 = document.createElement('p');
    description1.textContent = 'Pane croccante tostato, pomodori maturi marinati con erbe fresche, mozzarella di bufala cremosa. Un\'esplosione di sapori italiani';
    description2.textContent = 'Mozzarella filante, pomodoro fresco, prosciutto di Parma e basilico su una croccante base di pizza. Gusto e tradizione in ogni morso';
    description3.textContent = 'Strati di pasta fresca, ragù di carne saporito, besciamella e formaggio fuso. Un classico italiano che scalda il cuore';
    description4.textContent = 'Spaghetti al dente conditi con una salsa di pomodoro fresco, aglio e basilico. Semplice, autentico e delizioso';
    description5.textContent = 'Mozzarella di bufala, pomodori maturi, basilico fresco e olio extravergine di oliva. Un\'esplosione di sapori mediterranei in un\'insalata leggera e rinfrescante';
    description6.textContent = 'Uno strato di biscotti savoiardi inzuppati nel caffè, arricchiti con crema al mascarpone e cacao in polvere. Una dolce delizia che conquista il palato';
    item1.append(description1);
    item2.append(description2);
    item3.append(description3);
    item4.append(description4);
    item5.append(description5);
    item6.append(description6);

    menuContainer.append(item1, item2, item3, item4, item5, item6);

    mainContainer.appendChild(menuContainer);

};

export { populateMenu }
