//High Order Function
function kerjakanTugas(mataKuliah,selesai){
    console.log('Tugas Matakuliah : ' + mataKuliah)
    selesai();
}

function selesai(){
    console.log('function selesai');
}
console.log("Materi Closure");
kerjakanTugas("Pemrogramman", selesai);

//Method-method high order function

console.log("==========================================================")
console.log("Method-Method High Order Function");
console.log("var nilai = [2,3,5,3,5,60,-23,23,12,90];");

var nilai = [2,3,5,3,5,60,-23,23,12,90];
var KKM = []; // dikosongkan dului karena nanti akan ditampilkan dengan tipe data array
 
/*bagaimana cara mengurutkan atau menyeleksi variabel nilai*/

    /*for(let i=0; i<nilai.length; i++){
        if(nilai[i]>5) KKM.push(nilai[i]);
        console.log(KKM);
    }*/
console.log("==========================================================")
/*Menggunakan method .filter */
console.log("Method Filter")

var KKM = nilai.filter(a  => a <5);
console.log(KKM);
console.log("==========================================================")
//Map
console.log("Method Map");
    /* Method map 
    Method ini berfungsi untuk membuat aray baru dengan memanggil fungsi 
    callback yang disediakan sebagi argumen pada setiap elemen dalam array 
    lalu membuat array baru*/

/*var map = nilai.map((value,index)=>console.log([value, index]));
console.log(map);*/
    /* parameter 2 itu berguhna untuk mengetahui indexnya saja. tidak untuk lainnya */

const nilaiKKM = nilai.map(a=>a*2);
console.log(nilaiKKM);

console.log("==========================================================")
console.log("Method Reduce");
    /*Method Reduce
    Melakukan sesuatu terhadap seluruh elemen pada Array. Misal kita mau 
    jumlahkan seluruh elemen pada Array. Reduce memiliki 2 parameter 
    yaitu:
        # Istilah Parameter 1 yaitu accumulator yaitu hasil prosesnya misalkan elemen-elemennya dijumlahkan dan nama parameter bebas.
        # Istilah Parameter 2 yaitu currentValue yaitu elemen Array yang sedang diloopingnya dan nama parameter bebas.*/
    
    const newNilai = nilai.reduce((acc,cur)=>acc + cur) //Outputnya akan berupa penjumlahan setiap elemen var nilai
    console.log(newNilai);

    const baruNilai = nilai.reduce((acc,cur)=> acc + cur + 4) // +4 bertujuan untuk daat di jumlah tidak dimulai dengan penjumlahan angka 0
    console.log(baruNilai);
console.log("==========================================================")
console.log("Metode Chaining")

    /*Method chaining atau method berantai merupakan penggabungan method atau
    fungsi-fungsi yang ada pada HOF dalam satu kali eksekusi, jadi gak perlu
    dipisahkan*/

    const hasil = nilai
    .filter(a=>a>5)
    .map(a=>a*3)
    .reduce((acc,cur)=>acc+cur);
    console.log(hasil);