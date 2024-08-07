/// EQAUL SIGN = ///


/// DICE ///
var src1 = document.querySelectorAll('img')[0]; 
var randomNumber1 = Math.floor(Math.random()*6 ) + 1;
if (randomNumber1 === 1 ) {
    src1.setAttribute('src', './dice1.png')
} else if ( randomNumber1 === 2 ) {
    src1.setAttribute('src', './dice2.png')
} else if ( randomNumber1 === 3 ) {
    src1.setAttribute('src', './dice3.png')
}  else if ( randomNumber1 === 4 ) {
    src1.setAttribute('src', './dice4.png')
}  else if ( randomNumber1 === 5 ) {
    src1.setAttribute('src', './dice5.png')
}  else if ( randomNumber1 === 6 ) {
    src1.setAttribute('src', './dice1.png')
} else {
    src1.setAttribute('src', './dice1.png')
}


var src2 = document.querySelectorAll('img')[1]; 
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
if (randomNumber2 === 1 ) {
    src2.setAttribute('src', './dice1.png')
} else if ( randomNumber2 === 2 ) {
    src2.setAttribute('src', './dice2.png')
} else if ( randomNumber2 === 3 ) {
    src2.setAttribute('src', './dice3.png')
}  else if ( randomNumber2 === 4 ) {
    src2.setAttribute('src', './dice4.png')
}  else if ( randomNumber2 === 5 ) {
    src2.setAttribute('src', './dice5.png')
}  else if ( randomNumber2 === 6 ) {
    src2.setAttribute('src', './dice6.png')
} else {
    src2.setAttribute('src', './dice1.png')
}
/// DICE ///


if( randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🚩 Player 1 Wins! ';
} else if ( randomNumber1 < randomNumber2) {
    document.querySelector('h1').textContent = 'Player 2 Wins! 🚩';
} else if ( randomNumber1 === randomNumber2) {
    document.querySelector('h1').textContent = 'Draw!';
} else {
    document.querySelector('h1').textContent = 'Refresh Me!';
}
