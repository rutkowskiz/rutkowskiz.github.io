document.querySelector('#show-word').addEventListener('click', function() {
    let randomSet = getRandomWordSet();
    document.querySelector('#word-text').textContent = randomSet[0];
    document.querySelector('#forbidden1-text').textContent = randomSet[1][0];
    document.querySelector('#forbidden2-text').textContent = randomSet[1][1];
    document.querySelector('#forbidden3-text').textContent = randomSet[1][2];
    document.querySelector('#forbidden4-text').textContent = randomSet[1][3];
    document.querySelector('#forbidden5-text').textContent = randomSet[1][4];
});
