var computer = Math.random();

if (computer < 0.33) {
    computer = "rock";
} else if (computer > 0.66) {
    computer = "paper";
} else {
    computer = "scissors";
}

console.log("Computer: " + computer);

var user = Math.random();

if (user < 0.33) {
    user = "rock";
} else if (user <0.66) {
    user = "paper";
} else {
    user = "scissors";
} 

console.log ("User: " + user);

