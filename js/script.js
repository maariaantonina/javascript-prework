let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieprawidłowy wybór :(';
}

printMessage('Twój ruch to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);

/*if (playerMove == computerMove) {
    printMessage('Remis!');
} else if ((playerMove = 'kamień' && computerMove == 'nożyce') || (playerMove == 'papier' && computerMove == 'kamień') || (playerMove == 'nożyce' && computerMove == 'papier')) {
    printMessage('Wygrałeś');
} else if ((playerMove = 'kamień' && computerMove == 'papier') || (playerMove == 'papier' && computerMove == 'nożyce') || (playerMove == 'nożyce' && computerMove == 'kamień')) {
    printMessage('Przegrałeś!');
}*/


if (playerMove == 'kamień') {
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
}