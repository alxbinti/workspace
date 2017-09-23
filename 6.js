function qwe() {
  var list = ['piatra', 'foarfeca', 'hartie'];
  var alegere = list[Math.floor(Math.random() * list.length)];
  return alegere;
};

function joaca (){
  var jucator1 = qwe();
  var jucator2 = qwe();

jucator1 = qwe();
jucator2 = qwe();
  while (jucator1 === jucator2);
    console.log ('egalitate');

    if ((jucator1 === "rock") && (jucator2 === "scissors") || (jucator1 === "scissors") && (jucator2 === "paper") || (jucator1 === "rock") && (jucator2 === "paper")) {
    console.log("user gets " + user + " computer gets " + computer);
}   else {
    console.log("user gets " + user + " computer gets " + computer);
}
}
joaca();
