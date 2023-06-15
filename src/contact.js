import { navigator } from './index'
import mapPic from './map.jpeg'

function populateContact() {
    let mainContainer = document.getElementById('mainContainer');
    let contactContainer =  document.createElement('div');
    contactContainer.classList.add('contact');

    let p1 = document.createElement('p');
    p1.textContent = '+ 39 093 290036';

    let p2 = document.createElement('p');
    p2.textContent = 'Via Arena della Sanità, 7 Bis, 80137 Napoli';

    let map = document.createElement('img');
    map.src = mapPic 

    contactContainer.append(p1, p2, map);
    mainContainer.appendChild(contactContainer);
    
};

export { populateContact }
