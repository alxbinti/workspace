function rsp() {
    var list = ['rock', 'scissors', 'paper'];
    var random = list[Math.floor(Math.random() * list.length)];
    return random;
}

function play() {
    var user = rsp();
    var computer = rsp();

    while (user === computer) {
        console.log("draw");
        user = rsp();
        computer = rsp();
    }
        if ((user === "rock") && (computer === "scissors") ||
            (user === "scissors") && (computer === "paper") || 
            (user === "rock") && (computer === "paper")) {
        console.log("user gets " + user + " computer gets " + computer);
    }   else {
        console.log("user gets " + user + " computer gets " + computer);
    }
}

play();
