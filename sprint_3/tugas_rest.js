const biodata = ['rizal','Pambumulih','smknegeriprambumulih', 'prabujaya','sukajadi'];

var [nama,asal,...lain] = biodata;
console.log(`Nama : ${nama}`);
console.log(`Asal : ${asal}`);
console.log(...lain);