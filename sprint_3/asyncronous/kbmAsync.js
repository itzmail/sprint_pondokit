console.log("Asyncronous")
console.log('hello');
setTimeout(()=> {console.log('Ismail')},2000)
console.log('coder')

console.log("===============================================")
console.log("Callback Function")
function io(nama, umur, pergi){
    console.log("nama : " + nama);
    console.log("umur : " + umur);
    pergi();
}

function pulang(){
    console.log('status : pulang kampung')
}

io('helmuth',909,pulang)
console.log("===============================================")