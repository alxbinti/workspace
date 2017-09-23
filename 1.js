function rsp() {
    var list = ['rock', 'scisors', 'paper'];
    var getChoiceComputer = list[Math.random(Math.random() * list.length)];
    var computer = getChoiceComputer;
    var getChoiceUser = list[Math.random(Math.random() * list.length)];
    var user = getChoiceUser;
    var result;
    return computer;
    

//    if (getChoiceComputer == getChoiceUser) {
//        result = " equal " ;

    if (computer == "rock" && user == "scisors" ) {
        result = " computer wins " ;
    } else if (computer == "scisors" && user == "rock" ) {
        result = " player wins " ;
    } else if (computer == "scisors" && user == "paper" ) {
        result = " computer wins" ;
    } else if (computer == "paper" && user == "scisors" ) {
        result = " player wins " ;
    } else if (computer == "rock" && user == "paper" ) {
        result = " player wins " ;
    } else if (computer == "paper" && user == "rock" ) {
        result = " computer wins ";
    } else {
        result = " equal";
    }
    console.log(computer, user, result);
}
