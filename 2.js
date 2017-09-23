function play() {
    var typez = ['rock', 'scisors', 'paper'];
    var computerChoise = typez[Math.floor(Math.random() * typez.length)];
    var userChoise = typez[Math.floor(Math.random() * typez.length)];
    var computer = 'computer gets ' + computerChoise;
    var user = 'user gets ' + userChoise;
    var rez;

if (computer == "rock" && user == "scisors") {
    rez = "computer wins";
} else if (computer == "scisors" && user == "rock") {
    rez = "user wins";
} else if (computer == "scisors" && user == "paper") {
    rez = "computer wins";
} else if (computer == "paper" && user == "scisors") {
    rez = "user wins";
} else if (computer == "rock" && user == "paper") {
    rez = "user wins";
} else if (computer == "paper" && user == "rock") {
    rez = "computer wins";
} else {
    rez = "draw";
}
console.log(computer, user);
} 