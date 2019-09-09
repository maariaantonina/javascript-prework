let computerWon = 0;
let playerWon = 0;
let roundNumber = 0;


function playGame(playerInput) {
    clearMessages();

    roundNumber++;
    console.log(roundNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove === argPlayerMove) {
            printMessage('Komputer zagrał ' + argComputerMove + ', Ty również.');
            printMessage('Remis!');
            console.log(computerWon);
            console.log(playerWon);
        } else if ((argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
            printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
            printMessage('Wygrywasz rundę!');
            playerWon++;
            console.log(computerWon);
            console.log(playerWon);
        } else if ((argPlayerMove === 'kamień' && argComputerMove === 'papier') || (argPlayerMove === 'papier' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === "kamień")) {
            printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
            printMessage('Przegrywasz rundę!');
            computerWon++;
            console.log(computerWon);
            console.log(playerWon);
        }
    }


    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    //printMessage('Twój ruch to: ' + playerMove + '.');

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    //printMessage('Ruch komputera to: ' + computerMove + '.');

    displayResult(computerMove, playerMove);
    printMessage(computerWon + ' : ' + playerWon);


}

document.getElementById('play-rock').addEventListener('click', function () { playGame(1); });
document.getElementById('play-paper').addEventListener('click', function () { playGame(2); });
document.getElementById('play-scissors').addEventListener('click', function () { playGame(3); });