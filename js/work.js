const btnsContainer = document.querySelector('.sorting-list');
const resultsEl = document.getElementById('results');
let currentList = [];

// NEW PROJECT? JUST ADD AN OBJECT IN THE ARRAY BELOW!
let work = [
    {
        name: 'This project',
        type: ['website', 'recent'],
        img: './img/mockup/this-project-full.jpg',
        link: 'http://bykivi.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Kriah.com',
        type: ['website'],
        img: './img/mockup/kriah-full.jpg',
        link: 'https://kriah.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Landing page (Hebrew)',
        type: ['website', 'recent'],
        img: './img/mockup/hebrew-full.jpg',
        link: 'https://kriah.com/zobin-method',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Wedding Countdown',
        type: ['app', 'recent'],
        img: './img/mockup/countdown-full.jpg',
        link: 'http://bykivi.com/wedding-countdown',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Landing page',
        type: ['website', 'recent'],
        img: './img/mockup/landing-pg-full.jpg',
        link: 'https://kriah.com/hebrew-course',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Memory Game (24hr challenge)',
        type: ['game', 'recent'],
        img: './img/mockup/memory-game-full.jpg',
        link: 'http://bykivi.com/memory-game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Portfolio',
        type: ['website'],
        img: './img/mockup/portfolio-full.jpg',
        link: 'http://bykivi.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Classic Pong Game',
        type: ['game'],
        img: './img/mockup/pong-full.jpg',
        link: 'http://bykivi.com/pong',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
    {
        name: 'Gematriah Calculator',
        type: ['app'],
        img: './img/mockup/gematriah-full.jpg',
        link: 'http://bykivi.com/gematriah',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum repellendus facilis veritatis perspiciatis quidem officiis ut ipsa ducimus vitae quo placeat ipsam.'
    },
];

// FILTER THROUGH 'WORK' ARRAY
function sort(type) {
    let i;
    const workList = work.length;
    for(i = 0; i < workList; i++) {
        if (work[i].type.includes(type)) {
            currentList.push(work[i]);
        }
    }
    return currentList;
};

// DISPLAY CHOSEN TYPE
function showResult(results) {
    resultsEl.innerHTML = '';
    let i;
    const length = results.length;
    for (i = 0; i < length; i++) {
        const current = results[i];
        resultsEl.innerHTML += `
        <a class="item" target = "_blank" href="${current.link}">
            <div class="item__img-container">
                <img class="item__img" src="${current.img}" alt="">
                <div class="item__description">
                    <h3 class="item__title">${current.name}</h3>
                    <p class="item__text">${current.description}</p>
                </div>
            </div>
        </a>
        `;
    }
}

const sortItems = document.querySelectorAll('.sorting-list__item');
function checkBtn(e) {
    //CHANGE COLOR OF SELECTED BTN
    if (e.target.classList.contains('sorting-list__item')) {
        for (i = 0; i < sortItems.length; i ++) {
            if (sortItems[i] === e.target) {
                sortItems[i].classList.add('sorting-list__item--active');
            } else {
                sortItems[i].classList.remove('sorting-list__item--active');
            }
        }
    }

    // LISTEN TO CHOSEN BTN AND APPLY FILTER
    currentList = []; /*CLEAR PREVIOUSLY CHOSEN LIST*/
    const chosenBtn = e.target.id;
    let result;
    if (chosenBtn === "recent") {
        result = sort('recent');
    } else if (chosenBtn === 'games') {
        result = sort('game');
    } else if (chosenBtn === 'apps') {
        result = sort('app');
    } else if (chosenBtn === 'websites') {
        result = sort('website');
    }else if (chosenBtn === 'all') {
        result = work;
    } else {
        return;
    }

    //SCROLL TO TOP (FIRST ITEM)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    showResult(result);
}

// EVENT LISTENERS  
btnsContainer.addEventListener('click', checkBtn);

//  DISPLAY ALL WORK ON PAGE LOAD
window.addEventListener('load', showResult(work));