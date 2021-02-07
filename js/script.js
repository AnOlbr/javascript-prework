let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = `unknownC`;

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'unknownP';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    printMessage('Twój ruch jest niepoprawny! Wybierz 1, 2 lub 3!')
}

printMessage('Twój ruch to: ' + playerMove);

printMessage('Zagrałem ' + computerMove);