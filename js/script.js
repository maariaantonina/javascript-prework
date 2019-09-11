{
    let computerWon = 0;
    let playerWon = 0;
    let roundNumber = 0;

    function playGame(playerInput) {
        clearMessages();

        roundNumber++;
        console.log('Runda: ' + roundNumber);

        const playerMove = (function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
        })(playerInput);

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Gracz zagrał ' + playerInput + ' czyli ' + playerMove);

        const computerMove = (function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
        })(randomNumber);

        console.log(
            'Wylosowana liczba to: ' + randomNumber + ' czyli ' + computerMove
        );

        (function(argComputerMove, argPlayerMove) {
            if (argComputerMove === argPlayerMove) {
                printMessage(
                    'Komputer zagrał ' + argComputerMove + ', Ty również.'
                );
                printMessage('Remis!');
                console.log(computerWon);
                console.log(playerWon);
            } else if (
                (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') ||
                (argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
                (argPlayerMove === 'nożyce' && argComputerMove === 'papier')
            ) {
                printMessage(
                    'Komputer zagrał ' +
                        argComputerMove +
                        ', a Ty ' +
                        argPlayerMove +
                        '.'
                );
                printMessage('Wygrywasz rundę!');
                playerWon++;
                console.log(computerWon);
                console.log(playerWon);
            } else if (
                (argPlayerMove === 'kamień' && argComputerMove === 'papier') ||
                (argPlayerMove === 'papier' && argComputerMove === 'nożyce') ||
                (argPlayerMove === 'nożyce' && argComputerMove === 'kamień')
            ) {
                printMessage(
                    'Komputer zagrał ' +
                        argComputerMove +
                        ', a Ty ' +
                        argPlayerMove +
                        '.'
                );
                printMessage('Przegrywasz rundę!');
                computerWon++;
                console.log(computerWon);
                console.log(playerWon);
            }
        })(computerMove, playerMove);

        printMessage(
            'Runda ' + roundNumber + ' - ' + computerWon + ' : ' + playerWon
        );
        if (roundNumber > 9) {
            printMessage('Koniec gry! Zagraj jeszcze raz!');
            roundNumber = 0;
            computerWon = 0;
            playerWon = 0;
        }
    }

    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    document
        .getElementById('play-scissors')
        .addEventListener('click', function() {
            playGame(3);
        });
}
