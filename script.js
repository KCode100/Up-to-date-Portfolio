const adjEl = document.getElementById('adj');

const adjList = ['motivated', 'enthusiastic', 'creative', 'dedicated', 'devoted'];

let displayIndex = 0;
let delay = 250;

setInterval(() => {
    if (adjEl) {
        adjEl.innerText = adjList[displayIndex];
    }

    displayIndex ++;

    if (displayIndex >= adjList.length) {
        displayIndex = 0;
    }
}, delay);