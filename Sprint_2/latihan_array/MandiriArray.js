//Array Multidimensi

for (t=0; t<10; t++){
        var mobil=[
            ['avanza', 66],
            ['toyota', 54],
            ['ferrari', 78]
        ]
        console.log(mobil[0][1])

            console.log("========================================================================= no-" + t)
        //Fungsi-Fungsi pada array

        //Mengubah array menjadi string
            console.log(mobil.toString())

            console.log("========================================================================= no-" + t)

        //Menggabungkan setiap element array dan menjadi lan array tersebut menjadi string
        var people = ["sukijan", 'painem', 'apirjan', 'terry'];

        console.log(people.join('+'))

            console.log("========================================================================= no-" + t)

        //menambahkan atau mendorong element array di akhir element array
        var buah = ['jambu', 'semangka', 'rambutan']
        buah.push('durian', 'anggur')

        console.log(buah)

            console.log("========================================================================= no-" + t)

        //menghapus element array terakhir
        var sayur = ['kol','sawi','bayam','kubis']
        sayur.pop()

        console.log(sayur)
                //bagaimana cara menghapus index di tengah-tengah?
            console.log("========================================================================= no-" + t)

        //menambahkan element pertama pada array
        var box = ['masker', 'buku', 'pisau']
        box.unshift('kaca mata')

        console.log(box)

            console.log("========================================================================= no-" + t)

        //Menghapus element pertaman array
        box.shift()

        console.log(box)

            console.log("========================================================================= no-" + t)

        //Menyambung/menambahkan array, bisa ditengah-tengah element, array
        var fruits = ['apel', 'jeruk', 'jambu']
        fruits.splice(3, 1, ' telur')

        console.log(fruits)
                // syntax splice
                    //.splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)

        //Menghapus element array menggunakan splice

        fruits.splice(0,2) //2 = indexAwal; 0 = mauDihapusBerapa.
        //menggunakannya satu-satu

            console.log("========================================================================= no-" + t)

        //mengambil/mengiris array, menjadi beberapa bagian array untuk menjadi array yang baru
        var fav = buah.concat(sayur);
        console.log(fav)
        var komar = ['giat', 'rajin', 'kaya']

                //syntax .slice
                    //.slice(element array diiris di-awal, element array diiris di-akhir)

        console.log(komar.slice(0,2)) // yang akan tampil ialah giat dan rajin
        //array lama tetap bisa diakses

            console.log("========================================================================= no-" + t)

        //Mengisi array dengan looping
        var comel = ['kohceang', 'marmut', 'kelinci', 'cincila']

        for (var i = 0; i<comel.length; i++){
            console.log("Hewan apa saja yang comel - " +comel[i])
        } //yang akan tampil ialah berupa isinya lalu akan disusun menurun

            console.log("========================================================================= no-" + t)
}

console.log("Bab Opsional");
        //Looping pada array
            //menggunakan nama_array.forEach()
        
        var jeneng = ('ismail', 'yeti', 'bigfoot', ' kera');
        var angka = (1,2,3,4,5,6,7,8,9);

        angka.forEach(function(e){
            console.log(e)
        }
        )

        jeneng.forEach(
            function (e, i){
                console.log('Nama mahasiswa ke-' + i+1 + 'adalah :' +e)
            }
        )

            //hasilnya nihil
            //menggunakan map
                //fungsi ini berguna untuk looping denagan mengembalikan nilai var menjadi array
        var angka2 = angka.map(
            function(e){
                console.log(e)
            }
        )

        //ada tambahan fungsi yaitu sort, jadi fungsi ini melooping dengan cara mengurutkan nolai tersebut

        var angka = [2,1,3,4,5,8,7];
        angka.sort();
        console.log(angka.join('-'));