console.log('first events');


// system  2  -----by use function --- 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// system 3 --- 2 ta vabe kora jay---almost same e
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; // jokhon onclick er modhe evabe function set korbo tokhon function call kora jabe na sudhu name likhley hobe

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// another way 
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// system 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// system 4 : another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})