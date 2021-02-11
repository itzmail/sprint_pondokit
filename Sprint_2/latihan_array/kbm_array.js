var dem = [
    ['santri1', 90],
    ['santri2', 80]
]
console.log(dem[0][1]);

console.log("=========================================================================")

var fruit = [1, 54, 'apel']
console.log(fruit[0]);

// var mobil= new Array['pop', 'push']
// console.log(mobil[1])

console.log("=========================================================================")

var mobil=[
    ['avanza', 66],
    ['toyota', 54],
    ['ferrari', 78]
]
console.log(mobil[0][1])

console.log("=========================================================================")

//Fungsi-Fungsi pada array

//Mengubah array menjadi string
    console.log(mobil.toString())

    console.log("=========================================================================")

//Menggabungkan setiap element array dan menjadi lan array tersebut menjadi string
var people = ["sukijan", 'painem', 'apirjan', 'terry'];

console.log(people.join('+'))


console.log("=========================================================================")

//menambahkan atau mendorong element array di akhir element array
var buah = ['jambu', 'semangka', 'rambutan']
buah.push('durian', 'anggur')

console.log(buah)

console.log("=========================================================================")

//menghapus element array terakhir
var sayur = ['kol','sawi','bayam','kubis']
sayur.pop()

console.log(sayur)
        //bagaimana cara menghapus index di tengah-tengah?
console.log("=========================================================================")

var fruits = ['apel', 'jeruk', 'jambu']
fruits.splice(3, 0, ' telur')

console.log(fruits)
        // syntax splice
            //.splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)

//Menghapus element array menggunakan splice

fruits.splice(0,2) //2 = indexAwal; 0 = mauDihapusBerapa
console.log(fruits)

console.log("=========================================================================")

//mengambil/mengiris array, menjadi beberapa bagian array untuk menjadi array yang baru
var buah = ['jambu', 'semangka', 'rambutan'];
var sayur = ['kol','sawi','bayam','kubis'];
var fav = buah.concat(sayur);

console.log(fav)

console.log("=========================================================================")
        var komar = ['giat', 'rajin', 'kaya']

                //syntax .slice
                    //.slice(element array diiris di-awal, element array diiris di-akhir)

        console.log(komar.slice(0,3)) // yang akan tampil ialah giat dan rajin
        //array lama tetap bisa diakses
        console.log(komar)

console.log("=========================================================================")
        var comel = ['kohceang', 'marmut', 'kelinci', 'cincila']

        for (var i = 0; i<comel.length; i++){
            console.log("Hewan apa saja yang comel - " +comel[i])
        } //yang akan tampil ialah berupa isinya lalu akan disusun menurun

console.log("=========================================================================")

//CARA MENCARI RATA-RATA
var nilai = [90, 40, 78, 52, 65, 78]
var total = 0

for(i=0; i<nilai.length; i++){
    total += nilai[i];
}

var rata2 = console.log(total/nilai.length)