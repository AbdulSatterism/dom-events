10// method 2
function makeRed() {
    document.body.style.backgroundColor = 'red';

}

// handle blue btn click method 3

const blueBtn = document.getElementById('blue-button');
blueBtn.onclick = setBlueBtn;

function setBlueBtn() {
    document.body.style.backgroundColor = 'blue';
}

// handle green method 4
const greenButton = document.getElementById('green-button');
// function sorasori use korle take anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}

// method 5 in addEventListener
const goldenButton = document.getElementById('golden-button');
goldenButton.addEventListener('click', makeGolden)

function makeGolden() {
    document.body.style.backgroundColor = 'goldenRod'
}

// method 6
const pinkButton = document.getElementById('pink-button')
pinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink'
})

// method 7
document.getElementById('light-blue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})