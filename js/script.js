{
    function playGame(playerInput) {
        clearMessages();

        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        console.log('Gracz wpisał: ' + playerInput);

        let playerMove = getMoveName(playerInput),
            computerMove = getMoveName(randomNumber);

        displayResult(computerMove, playerMove);

    }

    let x = 0,
        y = 0;

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}
