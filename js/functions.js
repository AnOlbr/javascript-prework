{
    const printMessage = function(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

const clearMessages = function() {
    document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

const displayResult = function(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!')
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        x++;
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
        x++;
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        x++;
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Przegrałeś!');
        y++;
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Przegrałeś!');
        y++;
    } else {
        printMessage('Przegrałeś!');
        y++;
    }
    printMessage(x + ':' + y);
}

}