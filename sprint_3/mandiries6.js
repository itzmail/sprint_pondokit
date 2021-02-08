//Var, let, const
let nama = 'Dayat';
let nama = 'Hafif';
console.log(nama) //error
let nama = 'Hafif';
{
    let nama = 'Dayat';
    console.log(nama)//Dayat
}
console.log(nama)//Hafif
    /*Penulisan let digunakan saat variabel tersebut bersifat privat sehingga kita tidak bisa di akses di dalam scope
    penulisan var bersifat global sehingga kita bisa mengakses dimana saja
    penulisan const tidak bisa di rubah dan ditambah karena nilainya yang sudah tetap */

// Penulisan Arrow Function di es6
    //(parapmeter) => { codenya }

//contoh 1
const func1 = function (a, b) {
    return a + b;
};
console.log(func1(3, 3)); //6
//contoh 2
const func2 = (a, b) => {
    return a + b;
};
console.log(func2(3, 3)); //6
//contoh 3
const func3 = (a, b) => a + b;
console.log(func3(3, 3)); //6
//contoh 4
const func4 = (dobel) => dobel + dobel;
console.log(func4(5)); //10
console.log("======================================================")
// Ada fitur baru di JS yaitu ecma script 6

//1
class Santris {
    constructor(nama) {
        this.nama = nama
    }
}
let santri = new Santris('dayat') // membuat object dari class
console.log(santri) //Santris {nama: 'dayat'}
//2
class Siswa {
    getSiswa(nama) {
        return 'namanya' + nama
    }
}
let siswa = new Siswa()
console.log(siswa.getSiswa('hafif')) //namanya hafif
console.log("======================================================")
//Encapsulation, Instansiasi, Inheritance

//1)Inscapsulation
class PersegiPanjang {
    constructor() {
        this.panjang = 20;
        this.lebar = 15;
    }
    hitungLuasPersegiPanjang() {
        return this.panjang * this.lebar;
    }
}

class Segitiga {
    constructor() {
        this.alas = 20;
        this.tinggi = 15;
    }
    hitungLuasSegitiga() {
        return this.alas * this.tinggi / 2;
    }
}
//2)instansiasi
class PersegiPanjangCopy {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    hitungLuasPersegiPanjang() {
        return this.panjang * this.lebar;
    }
}
const persegiPanjang = new PersegiPanjangCopy(10, 3);
console.log(persegiPanjang)
console.log(persegiPanjang.hitungLuasPersegiPanjang());

//3)inheritance
class Hitung extends PersegiPanjangCopy {}

const hitung = new Hitung(12, 10);
console.log(hitung);
console.log(hitung.hitungLuasPersegiPanjang);
console.log("======================================================")
//Polimorfism
function Person(gender) {
    this.gender = gender;
    this.sayHello = function () {
        console.log("Hello, I am a " + this.gender);
    }
}

var man = new Person("man");
var woman = new Person('woman')

man.sayHello("man");
woman.sayHello("woman");
console.log("======================================================")

//default params, rest, spread operator
const add = function () {
    const numbers = Array.prototype.slice.call(arguments);
    return numbers.reduce((a, b) => a + b);
};
console.log("Penjumlahan " + add(2, 3, 4, 5, 6, 7)); //hasil tidak keluar

const multi = (multiplier, ...numbers) => {
    return numbers.map(n => n * multiplier);
}
console.log("Perkalian " + multi(2, 4, 5, 6, 7, 8));
console.log("======================================================")

//Destructuring
    //Array Destructuring
const arr = [0, 1, 2, 3];
    /*Jika kita ingin menempatkan masing-masing nilainya ke dalam 
    variabel a sampai d, kita akan melakukan */
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

    //dihubungkan lagi variabel tersebut
var [a, b, c, d] = arr;
console.log("Menghubungkan variabel yang tadinya sudah dipecah");
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("Memisahkan lagi dari yang sudah dihubungkan");
var a,b,c,d;
[a,b,c,d] = arr;
console.log("======================================================")

    /* Menambahkan element array, karena ketika kita akses element 
    array melebihi dari jumlah seharusnya maka akan terjadi error */
var a,b,c,d;
[a,b,c,d,e=4]=arr;
console.log(e);

    /* sebalikanya, jika terdapat elemen pada array yang kita abaikan,
    kita tinggal mengosongkan nama variabel pada tempat yang kita inginkan */

var a,b;
[b,/* ini dikosongkan agar element sebelumnya tidak dibaca */,a] = arr;
console.log(a);
console.log(b);
console.log("======================================================")

//REST OPERATOR
    /* Jika array yang akan kita 'bongkar' tidak diketahui panjangnya,
    dan kita ingin mengekstraksi beberapa elemen terdepannnya dan sisa 
    elemennya, kita dapat menggabungkan array destructuring dengan 
    REST OPERATOR */

const arr2 = [0,1,3,4,5,6];
var [a,b,...rest] = arr2;
console.log("contoh 1");
console.log(a);
console.log(b);
console.log(rest);

console.log("======================================================")
//Object Destructuring
const person = {name:"Faishal", age:19}
const {name,age} = person;
console.log(name);
console.log(age);

    /*Seperti array destructuring, kita juga dapat melakukan destructuring
    terhadap objek tanpa melakukan deklarasi pada baris yang sama. perbedaanya
    adalahkita harus membungkusnya dengan sepasang tanda kurung agar pernyataan 
    pada sisi kiri ({ name,age }) tidak dianggap sebagai blok */
let name,age;
const person = {name:'faishal',age:19};
({ name, age } = person);

    /* Dalam object destructuring, nama key pada soso kiri pernyataan 
    harus match dengan nama key pada objek sumber. Namun, kita dapat memasang 
    hasil destructutring ke dalam variable dengan nama berbeda dengan cara berikut.*/
let person,umur;
const person2 = {person:"Tio",umur:17};
({person:nama,umur:umur}=person2);
console.log(person);
console.log(umur);

    /* Seperti array destructuring juga, kita dapat 
    memberikan nilai default pada objek hasil destructuring kita */
let name,age,website;
const person = {name:"Yuki",age:20};
({name,age,website="icalrn.id"} = person);
console.log(website);

//PROMISE
    /* Promise adalah built in method or built in function yang terdapat pada 
    java script yang berguna untuk menangkap event atau suatu kejadian 
    ketika menggunakan asyncronous java script , dimana kita dapat 
    melihat suatu event berhasil dilakukan atau gagal untuk dilakukan */

    /* untuk menggunakan mendapatkan nilai true , atau menangkap bahwa event 
    berhasil dilakukan menggunakan methode .then", */

    /* "untuk mendapatkan nilai false , atau menangkap bahwa event gagal dilakukan 
    menggunakan methode .cacth */

    /* Promise berguna untuk mendapatkan nilai true atau false , dimana pada saat 
    kita melakukan asyncronous javascript kita dapat dengan mudah untuk mendapatkan 
    hasil apakah event yang kita lakukan berhasil dilakukan atau gagal dilakukan  */

const fs = require('fs')
    //contoh promise untuk async
const promiseAsync = new promiseAsync((resolve,reject)=>{
    fs.readFile('A.txt','utf8',(err,res)=>{
        if(err)reject(err);
        resolve(res);
    });
})
.then(res=>console.log('hasil async:',res))
.catch(err=>console.log('error',err))
    //contoh promise untuk async
const promiseSync = new Promise(resolve=>{
    resolve(hasil);
})
.then(res=>console.log('hasil sync.',res))

    /* Memanfaatkan API “then” dan “catch” Sebuah object Promise memiliki metode 
    fungsi then dan catch yang masing-masing memiliki fungsi untuk mengolah hasil 
    sukses dan gagal. */
        const fs = require('fs');
        const promiseA = new Promise((resolve, reject) => {
        fs.readFile('A.txt', 'utf8', (err, res) => {
        if (err) reject(err);
        resolve(res);
        });
        });
        const promiseB = new Promise((resolve, reject) => {
        fs.readFile('B.txt', 'utf8', (err, res) => {
        if (err) reject(err);
        resolve(res);
        });
        });
        const promiseFail = new Promise((resolve, reject) => {
        fs.readFile('XXX.txt', 'utf8', (err, res) => {
        if (err) reject(err);
        resolve(res);
        });
        });
        // promiseA
        .then(resA => {
        console.log('hasil A: ', resA);
        return promiseB;
        })
        .then(resB => {
        console.log('hasil B: ', resB);
        return promiseFail;
        })
        .then(resFail => {
        console.log('hasil fail: ', resFail);
        })
        .catch(err => console.log('error: ', err));