function qwe() {
  var list = ['piatra', 'foarfeca', 'hartie'];
  var alegere = list[Math.floor(Math.random() * list.length)];
  return alegere;
}

function joaca () {
  var jucator1 = qwe();
  var jucator2 = qwe();

    while (jucator1 === jucator2) {
    console.log ('egalitate');
    jucator1 = qwe();
    jucator2 = qwe();
  }
      console.log("jucator1 alege " + jucator1 + " jucator2 alege " + jucator2);
  }
joaca();
