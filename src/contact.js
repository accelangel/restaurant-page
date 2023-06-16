import mapPic from './map.jpeg'
import phoneIcon from './telephone.png'
import locationIcon from './location.svg'

function populateContact() {
    let mainContainer = document.getElementById('mainContainer');
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    let paraDiv1 = document.createElement('div');
    paraDiv1.classList.add('paraDiv');
    let p1 = document.createElement('p');
    p1.textContent = '+ 39 093 290036';
    let phone = document.createElement('img');
    phone.src = phoneIcon;
    paraDiv1.append(phone, p1);

    let paraDiv2 = document.createElement('div');
    paraDiv2.classList.add('paraDiv');
    let p2 = document.createElement('p');
    p2.textContent = 'Via Arena della Sanità, 7 Bis, 80137 Napoli';
    let location = document.createElement('img');
    location.src = locationIcon;
    paraDiv2.append(location, p2);

    let map = document.createElement('img');
    map.src = mapPic

    contactContainer.append(paraDiv1, paraDiv2, map);
    mainContainer.appendChild(contactContainer);

};

export { populateContact }
