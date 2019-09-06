function getMoveName(argMoveId) {
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

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if ((argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || (argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
        printMessage('Wygrywasz!');
    } else if ((argPlayerMove == 'kamień' && argComputerMove == 'papier') || (argPlayerMove == 'papier' && argComputerMove == 'nożyce') || (argPlayerMove == 'nożyce' && argComputerMove == "kamień")) {
        printMessage('Przegrywasz!');
    } else {
        printMessage('spróbuj wpisać właściwy numer');
    }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
    argPlayerMove = 'kamień';
} else if (playerInput == '2') {
    argPlayerMove = 'papier';
} else if (playerInput == '3') {
    argPlayerMove = 'nożyce';
} else {
    argPlayerMove = 'nieprawidłowy wybór :(';
}*/

printMessage('Twój ruch to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}*/

printMessage('Ruch komputera to: ' + computerMove);

/*if (playerMove == computerMove) {
    printMessage('Remis!');
} else if ((playerMove = 'kamień' && computerMove == 'nożyce') || (playerMove == 'papier' && computerMove == 'kamień') || (playerMove == 'nożyce' && computerMove == 'papier')) {
    printMessage('Wygrałeś');
} else if ((playerMove = 'kamień' && computerMove == 'papier') || (playerMove == 'papier' && computerMove == 'nożyce') || (playerMove == 'nożyce' && computerMove == 'kamień')) {
    printMessage('Przegrałeś!');
}*/


/*if (playerMove == 'kamień') {
    if (computerMove == playerMove) {
        printMessage('Remis!');
    } else if (computerMove == 'nożyce') {
        printMessage('Wygrałeś!');
    } else {
        printMessage('Przegrałeś!');
    }
} else if (playerMove == 'nożyce') {
    if (computerMove == playerMove) {
        printMessage('Remis!');
    } else if (computerMove == 'papier') {
        printMessage('Wygrałeś!');
    } else {
        printMessage('Przegrałeś!');
    }
} else if (playerMove == 'papier') {
    if (computerMove == playerMove) {
        printMessage('Remis!');
    } else if (computerMove == 'kamień') {
        printMessage('Wygrałeś!');
    } else {
        printMessage('Przegrałeś!');
    }
} else {
    printMessage('Spróbuj jeszcze raz');
}*/

displayResult(computerMove, playerMove);
