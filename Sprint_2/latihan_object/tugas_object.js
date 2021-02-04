var rumah = {
    keluarga : "Ucil's Family",
    lantai : "4 lantai",
    anggota : "Pasutri dan 2 anak",
}

console.log(`Nama Keluarga : ${rumah.keluarga}`)
console.log(`Jumlah lantai : ${rumah.lantai}`)
console.log(`Jumlah anggota keluarga : ${rumah.anggota}`)
console.log("=========================================================================")

var pesawat = {
    merek : "Elang Magelang",
    roda : "3 roda",
    sayap : "Sayap Elang",
    muatan : "100 Penumpang"
}

console.log(`Merek Pesawat : ${pesawat.merek}`)
console.log(`Jumlah roda : ${pesawat.roda}`)
console.log(`Jumlah sayap : ${pesawat.sayap}`)
console.log(`Muatan penumpang : ${pesawat.muatan}`)
console.log("=========================================================================")

var sepeda = {
    merek : "IMACO",
    roda : 2,
    jalan : function (){
        return "Kayuh sepedanya"
    },
    berhenti : function (){
        return "rem sepedanya"
    }
}

console.log(`Merek Sepeda : ${sepeda.merek}`)
console.log(`Jumlah roda : ${sepeda.roda}`)
console.log(`Sepeda jalankan : ${sepeda.jalan()}`)
console.log(`Rem sepedanya : ${sepeda.berhenti()}`)
console.log("=========================================================================")

var laptop = {
    merek : "Sumsang",
    processor : "Intel Ryzen 9",
    layar : "15,6 inch",
    vga : "nvidia YTX"
}

console.log(`Merek Laptop : ${laptop.merek}`)
console.log(`Nama Processor : ${laptop.processor}`)
console.log(`Ukuran layar : ${laptop.layar}`)
console.log(`VGA : ${laptop.vga}`)
console.log("=========================================================================")

var gawai = {
    merek : "Siaomi",
    processor : "Snapcat 650",
    layar : "9,6 inch",
    kamera : "4k"
}

console.log(`Merek gawai : ${gawai.merek}`)
console.log(`Nama Processor : ${gawai.processor}`)
console.log(`Ukuran layar : ${gawai.layar}`)
console.log(`Kualitas kamera : ${gawai.kamera}`)
console.log("=========================================================================")