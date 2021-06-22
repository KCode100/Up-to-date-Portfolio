const btnsContainer = document.querySelector('.sorting-list');
const resultsEl = document.getElementById('results');
let currentList = [];

// NEW PROJECT? JUST ADD AN OBJECT IN THE ARRAY BELOW!
let work = [
    {
        name: 'ByKivi.com (WIP)',
        type: ['website', 'recent'],
        img: './img/mockup/this-project-full.jpg',
        link: 'http://bykivi.com',
        description: 'A portfolio site for clients and employers to read about me and to view previous work. Resonsive site. Modern design. Vanilla JavaScript.'
    },
    {
        name: 'Landing page',
        type: ['website', 'recent'],
        img: './img/mockup/landing-pg-full.jpg',
        link: 'https://kriah.com/hebrew-course',
        description: 'A landing page for a leading educational institution. Responsive site. Modern Design. SEO. A/B testing. Facebook ads.'
    },
    {
        name: 'Kriah.com',
        type: ['website'],
        img: './img/mockup/kriah-full.jpg',
        link: 'https://kriah.com',
        description: "One of the best rated reading specialist institutions in the country. This site was transformed from a template design into a bespoke, 20 page responsive website. It includes a login system for users to access resources and FAQ's."
    },
    {
        name: 'Landing page (Hebrew)',
        type: ['website', 'recent'],
        img: './img/mockup/hebrew-full.jpg',
        link: 'https://kriah.com/zobin-method',
        description: 'A landing page in Hebrew for a leading educational institution. Responsive site. Modern Design. SEO. A/B testing. Facebook ads.'
    },
    {
        name: 'Wedding Countdown',
        type: ['app', 'recent'],
        img: './img/mockup/countdown-full.jpg',
        link: 'http://bykivi.com/wedding-countdown',
        description: 'A personalized countdown clock to your wedding day! It saves high scores to your device using the LocalStorage API'
    },
    {
        name: 'Memory Game (24hr challenge)',
        type: ['game', 'recent'],
        img: './img/mockup/memory-game-full.jpg',
        link: 'http://bykivi.com/memory-game',
        description: "Challenge: Build a memory game using vanilla JavaScript within 24 hours. I created an interactive 'Simon Says' game. It saves high Scores, includes speed and sound settings, localStorage, and it's Mobile Responsive."
    },
    {
        name: 'Portfolio',
        type: ['website'],
        img: './img/mockup/portfolio-full.jpg',
        link: 'http://bykivi.com/portfolio',
        description: 'An alternative portfolio website to showcase my work and skills to clients and employers.'
    },
    {
        name: 'Classic Pong Game',
        type: ['game'],
        img: './img/mockup/pong-full.jpg',
        link: 'http://bykivi.com/pong',
        description: 'One of the first computer games ever created!'
    },
    {
        name: 'Gematriah Calculator',
        type: ['app'],
        img: './img/mockup/gematriah-full.jpg',
        link: 'http://bykivi.com/gematriah',
        description: 'Calculate the numerical value of Hebrew letters and words.'
    },
    {
        name: 'Quiz Game [WIP]',
        type: ['game'],
        img: './img/mockup/quiz.jpg',
        link: 'http://bykivi.com/quiz',
        description: 'Challenge yourself with a Trivia Quiz.'
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