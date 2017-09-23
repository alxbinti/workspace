function rsp() {

    var r1 = Math.random();
    if (r1 < 0.33) {
        r1 = ' player gets rock';
    } else if (r1 < 0.66) { 
        r1 = ' player gets scissors';
    } else {
        r1 = ' player gets paper';
    }

    var r2 = Math.random();
    if (r2 < 0.33) {
        r2 = ' computer gets rock';
    } else if (r2 < 0.66) {
        r2 = ' computer gets scissors';
    } else {
        r2 = ' computer gets paper';
    }

    var rez;

    if (r1 == "rock" && r2 == "scissors") {
        rez = r1 ;
    } else if (r1 == "scissors" && r2 == "rock") {
        rez = r2 ;
    } else if (r1 == "scissors" && r2 == "paper") {
        rez = r1 ;
    } else if (r1 == "paper" && r2 == "scissors") {
            rez = r2 ;
    } else if (r1 == "rock" && r2 == "paper") { 
            rez = r2 ;
    } else if (r1 == "paper" && r2 == "rock") {
            rez = r1 ;
    } else {
            r1 = r2 ;
    }    
    console.log(r1,r2, rez);
}