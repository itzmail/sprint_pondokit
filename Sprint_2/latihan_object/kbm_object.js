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
console.log(mobil.isi(), mobil.gas(), mobil.kumpulan)
console.log("=========================================================================")

function siswa(nama,usia){
    var anak = {}
        anak.nama = nama,
        anak.usia = usia
    return anak
}
console.log(siswa('ismail',undefined))
console.log("=========================================================================")

var siswa = new Object()
siswa.nama = 'tompel';
siswa.usia = 23;

console.log("nama : " + siswa.nama)
console.log("usia : " + siswa.usia)
console.log("=========================================================================")

var student = {nama:"Ismail", usia: undefined};
student.nama = "Bambang"

console.log(student.nama)
console.log("=========================================================================")
