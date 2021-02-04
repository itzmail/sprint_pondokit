// INGAT!! menuliskan object hanya bisa menggunakan console
// cara menuliskan syntax object literall
var mobil = {
    merek:"avanza",
    bensin:"diesel",
    roda:4,
    kumpulan:['lama', 'sekarang', 'baru'],
    gas : function(){
        return "mobil berjalan"
    },
    isi : function(){
        return "mobil berhenti"
    }
}
console.log(mobil.kumpulan)

console.log("=========================================================================")
// cara menuliskan object menggunakan Function declaration
function siswa(nama,usia){
    var anak = {}
        anak.nama = nama,
        anak.usia = usia
    return anak
}
console.log(siswa('ismail',20))
console.log("=========================================================================")

// cara menuliskan menggunakan keyword new
var siswa = new Object()
siswa.nama = 'tompel';
siswa.usia = 23;

console.log(siswa.nama)
console.log(siswa.usia)
console.log("=========================================================================")

//object bisa berubah
var student = {nama:"Ismail", usia: undefined};
var x = student

x.nama = "Bambang"

console.log(x)
console.log("=========================================================================")

//Fungsi-Fungsi  Manipulasi pada object
        //Object.assign()

const target={a:1,b:2};
const source={c:4,d:5};

const returnedTarget = Object.assign(target,source);

console.log(target)
console.log(source)
console.log(returnedTarget)
        //fungsi dari .assign ini menunjukkan bahwa object source disalin kedalam object target dimana namapropertied yang ddama akan digantikan oleh object source. dan object yang dikemabalikan adalah object target

// Object.create digunakan untuk membuat object baru
const santri = {
    muslim: false,
    perkenalan:function(){
        console.log(`nama saya ${this.nama} Apakah saya muslim ? ${this.muslim}`);
    }
};

const saya = Object.create(santri);

saya.nama = `ismail`;
saya.muslim = true;
saya.perkenalan();