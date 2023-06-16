import chef from './chef.jpg'
function populateHome() {
    let mainContainer = document.getElementById('mainContainer');
    let homeContainer = document.createElement('div');
    homeContainer.classList.add('home');

    let p1 = document.createElement('p');
    p1.textContent = 'La migliore cucina italiana al mondo';
    homeContainer.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = 'Fatto con passione dal 1921';
    homeContainer.appendChild(p2);

    let image = document.createElement('img');
    image.src = chef;
    homeContainer.appendChild(image);

    let p3 = document.createElement('p');
    p3.textContent = 'Vieni e lascia che ti diamo da mangiare';
    homeContainer.appendChild(p3);

    mainContainer.appendChild(homeContainer);
};

export { populateHome };
