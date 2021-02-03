var aku = 20;
var kamu = 19;

var benar = aku > kamu;
var salah = aku < kamu;

console.log("<br><br><br>");
// operator && (and)
var hasil = benar && salah;
console.log( "benar" +  "&&" +  salah + " = " +  hasil + "<br/>");

// operator || (or)
hasil = benar || salah;
console.log( "benar" +  "||" +  salah + " = " +  hasil + "<br/>");

// operator ! (not)
hasil = !benar
console.log("!" + benar + "=" + hasil);