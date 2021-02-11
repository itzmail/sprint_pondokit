//Syncronous
    /* Yang dimaksud dari ini adalah dia bersifat menunggu perintah sebelumnya dijalankan jadi berurutan dari atas sampai bawah.
    perintah yang lagi menunggu disebut (blocking) */
    
        //Contoh
    console.log("++++++++++++++++Syncornous++++++++++++++++")
    console.log("Hello");
    console.log("Earth");
    console.log("Who are you?");

//Asyncronous
    /* Yang dimaksud dari async adalah kebalikan dari yang ada di atas. cara kerja dari asyncronous ialah berdasarkan waktu proses. 
    Bila waktu prosesnya lama maka akan dilewati atau ditunda terlebih dahulu */
    console.log("++++++++++++++++Asyncornous++++++++++++++++")
    console.log("Hello Earth");
    setTimeout(()=>{console.log("Javascript")},100);
    console.log("coder");//yan akan dijalankan setelah perintah "hello earth"

//Konsep Callback
    /* Pada dasarnya callback ini adalah function. yang memedakan dengan function lain. kalau 
    function pada umumnya mengeksekusi secara langsung. sedangkan callback mengeksekusi dari point-point tertentu */
    console.log("++++++++++++++++Konsep CallBack++++++++++++++++")

    function main (param1,param2,callBack) {
        console.log(param1,param2);
        callback();
    }

    function callback () {
        console.log("Ohio Isekai")
    }

    main(1,2,callback);

    /* Kenapa function bisa di jadikan sebagai parameter ? Function dalam javascript adalah object atau sering 
    disebut first-class object, yang artinya :

    ~ Function bisa di jadikan parameter
    ~ Function dapat disimpan ke dalam variabel
    ~ Seperti object pada umumnya, function bisa memiliki property dan method
    ~ Function dapat mengembalikan value dalam bentuk function */

    /* Kapan Callback digunakan? 
        Callback dapat digunakan untuk proses synchronous maupun asynchronous. Beberapa contoh implementasi callback adalah :
        Injeksi atau modifikasi hasil eksekusi sebuah function Event listener Menangani proses asynchronous
    */

    console.log("++++++++++++++++Promise++++++++++++++++")
    /* Promise
    Promise adalah salah fitur terbaru dari ES6. Jika anda sebelumnya sudah pernah menggunakan .then maka anda sudah menggunakan promise. 
    Mari kita mulai dari analogi sederhana. Anda janjian ketemuan dengan salah satu kolega anda, tiba-tiba kolega tersebut bertanya anda sudah dimana? 
    Ada beberapa kemungkinan jawaban disini : dalam perjalanan, sudah sampai atau janjinya di batalkan.

    Dalam dunia promise analogi di atas juga sama, ketika melakukan request asynchronous seperti Ajax, maka ada 3 kemungkinan state :

    Pending ( sedang dalam proses )
    Fulfilled ( berhasil )
    Rejected ( gagal ) */

    //Untuk membuat promise cukup memanggil constructurnya saja

    /* var janjian = new Promise();
    console.log(janjian) */

    /* bagaimana untuk mengatur state Fullfilled dan Reject ? Untuk state ini gunakan salah satu listener, resolve() atau reject() */
    var janjian = new Promise();
        (resolve,reject)=>{
            //salah satu dari 2 callback berikut
            //resolve('Berhasil')
            //reject(new Error('Janji di batalkan'))
        }
    Promise()
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
    //HASIL TIDAK MUNCUL GUE KAGAK TAHU CARA MAKAINYA

    /* Async/Await 
    
    adalah fitur untuk mempermudah dalam menangani proses asynchromous.
    ada 2 kata kunci di sini yaitu async dan await*/

    async function hello(){
        result = await doAsync()
        console.log(result)
    }