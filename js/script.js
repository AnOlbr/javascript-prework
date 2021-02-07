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
    printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '2') {
    playerMove = 'papier';
    printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '3') {
    playerMove = 'nożyce';
    printMessage('Twój ruch to: ' + playerMove);
} else {
    printMessage('Twój ruch jest niepoprawny! Wybierz 1, 2 lub 3!')
}

if (playerMove !== 'unknownP') {
    printMessage('Zagrałem ' + computerMove);
}

if (computerMove == playerMove) {
    printMessage('Remis!')
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (playerMove == 'kamień' && computerMove == 'papier') {
    printMessage('Przegrałeś!');
} else if (playerMove == 'papier' && computerMove == 'nożyce') {
    printMessage('Przegrałeś!');
} else if (playerMove == 'nożyce' && computerMove == 'kamień') {
    printMessage('Przegrałeś!');
}
printMessage('Odśwież stronę, by spróbować ponownie...')
