const btnsContainer = document.querySelector('.sorting-list');
const resultsEl = document.getElementById('results');
let currentList = [];

// NEW PROJECT? JUST ADD AN OBJECT IN THE ARRAY BELOW!
// CREATE IMAGE MOCKUPS HERE: https://techsini.com/multi-mockup/
let work = [
    {
        name: 'thecommonwealth - Trade-review',
        type: ['website', 'recent'],
        img: './img/mockup/tradereview-commonwealth.jpg',
        link: 'https://trade-review.thecommonwealth.org/',
        description: 'The Commonwealth is an association of 54 independent countries. I had the privilege to build the frontend of 2 of their "microsites". The day after deployment these sites had over 100,000 views from across the globe.'
    },
    {
        name: 'thecommonwealth - Youth Development Index',
        type: ['website', 'recent'],
        img: './img/mockup/ydi-commonwealth2.jpg',
        link: 'https://youth-development-index.thecommonwealth.org/',
        description: 'The Commonwealth is an association of 54 independent countries. I had the privilege to build the frontend of 2 of their "microsites". The day after deployment these sites had over 100,000 views from across the globe.'

    },
    {
        name: 'IPQ Capital',
        type: ['website', 'recent'],
        img: './img/mockup/ipqcapital.jpg',
        link: 'https://ipqcapital.com/',
        description: "IPQ Capital is a private investment office based in Copenhagen. My task was to produce a pixel perfect replication of the provided design, using GSAP to animate SVG's on scroll."
    },
    {
        name: 'Sport England - Join The Movement campaign',
        type: ['website', 'recent'],
        img: './img/mockup/sport-england.jpg',
        link: 'https://www.sportengland.org/jointhemovement',
        description: 'Join The Movement is  a National Lottery-funded campaign helping the public to find ways to get active. My task was to code the Frontend for this theme built with Drupal 9.'
    },
    {
        name: 'Trivia Quiz',
        type: ['game', 'react', 'recent', 'app'],
        img: './img/mockup/quiz.png',
        link: 'http://bykivi.com/quiz',
        description: 'Challenge yourself with a customized Trivia Quiz. This application was built with React, Material-UI and Framer-motion.'
    },
    {
        name: 'React and Firebase Gallery Application',
        type: ['app', 'react', 'recent'],
        img: './img/mockup/gallery.jpg',
        link: 'http://bykivi.com/react-gallery/',
        description: 'Build an instagram-like photo gallery app with React & Firebase'

    },
    {
        name: 'React.js game',
        type: ['game', 'react'],
        img: './img/mockup/react-game-full.png',
        link: 'http://react-game.bykivi.com/',
        description: 'This is a classic memory game built with the popular Frontend framework - React! I built this game to enhance my React skills and to demonstrate my JS skill set.'
    },
    {
        name: 'Portfolio',
        type: ['website'],
        img: './img/mockup/portfolio-full.jpg',
        link: 'http://bykivi.com/portfolio',
        description: 'An alternative portfolio website to showcase my work and skills to clients and employers.'
    },
    {
        name: 'Application Programming Interfaces',
        type: ['app'],
        img: './img//mockup/api-full.png',
        link: 'http://api.bykivi.com',
        description: "4 applications to better understand how API's work and their implementations."
    },
    {
        name: 'ByKivi.com (WIP)',
        type: ['website'],
        img: './img/mockup/this-project-full.jpg',
        link: 'http://bykivi.com',
        description: 'A portfolio site for clients and employers to read about me and to view previous work. Resonsive site. Modern design. Vanilla JavaScript.'
    },
    {
        name: 'Landing page',
        type: ['website'],
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
        type: ['website'],
        img: './img/mockup/hebrew-full.jpg',
        link: 'https://kriah.com/zobin-method',
        description: 'A landing page in Hebrew for a leading educational institution. Responsive site. Modern Design. SEO. A/B testing. Facebook ads.'
    },
    {
        name: 'Wedding Countdown',
        type: ['app'],
        img: './img/mockup/countdown-full.jpg',
        link: 'http://bykivi.com/wedding-countdown',
        description: 'A personalized countdown clock to your wedding day! It saves high scores to your device using the LocalStorage API'
    },
    {
        name: 'Memory Game (24hr challenge)',
        type: ['game'],
        img: './img/mockup/memory-game-full.jpg',
        link: 'http://bykivi.com/memory-game',
        description: "Challenge: Build a memory game using vanilla JavaScript within 24 hours. I created an interactive 'Simon Says' game. It saves high Scores, includes speed and sound settings, localStorage, and it's Mobile Responsive."
    },
    {
        name: 'Classic Pong Game',
        type: ['game'],
        img: './img/mockup/pong-full.jpg',
        link: 'http://bykivi.com/pong',
        description: 'One of the first computer games ever created!'
    },
    {
        name: 'React dog breeds collection',
        type: ['app', 'react'],
        img: './img/mockup/dog-breeds.jpg',
        link: 'http://bykivi.com/dog-breeds/',
        description: 'As a react.js assessment for a job application, I was challenged to create a page to keep track of your favorite pictures of dog breeds and complete it in 3 hours.'

    },
    {
        name: 'React random user API and search',
        type: ['app', 'react'],
        img: './img/mockup/random-user.jpg',
        link: 'http://bykivi.com/random-user-search/',
        description: 'As a react.js assessment for a job application, I was challenged to create a page displaying random users from randomuser API with search functionality.'
    },
    {
        name: 'Gematriah Calculator',
        type: ['app'],
        img: './img/mockup/gematriah-full.jpg',
        link: 'http://bykivi.com/gematriah',
        description: 'Calculate the numerical value of Hebrew letters and words.'
    }
];

// FILTER THROUGH 'WORK' ARRAY
function sort(type) {
    let i;
    const workList = work.length;
    for (i = 0; i < workList; i++) {
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
        for (i = 0; i < sortItems.length; i++) {
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
    } else if (chosenBtn === 'react') {
        result = sort('react');
    } else if (chosenBtn === 'all') {
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