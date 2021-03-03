var jawab = prompt("Kamu beruntung! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 5");
var hadiah="";

switch(jawab){
    case "1":
    hadiah = " Tisu";
    break;

    case "2":
        hadiah = " Rumah lt36";
        break;
    
    case "3":
        hadiah = " Emas 1TG";
        break;
    
    case "4":
        hadiah = " buku";0
        break;

    case "5":
        hadiah = " Tio";
        break;

    default:
        document.write("<p>Opps! anda salah pilh</p>");
}

if (hadiah === ""){
    document.write("<P>Kamu gagal mendapat hadiah</p>");
} else {
    document.write("<h2>Selamat kamu mendapat" + hadiah + "</h2>");
}

var nilai = prompt("input nilai");
var grade="";

switch(true){
    case nilai>=90:
        grade = "A";
        break;

    case nilai>=80:
        grade = "B+";
        break;

    case nilai>=70:
        grade = "B";
        break;

    case nilai>=60:
        grade = "C+";
        break;

    case nilai>=50:
        grade = "C";
        break;

    case nilai>=40:
        grade = "D+";
        break;
        
    case nilai>=30:
        grade = "D";
        break;
    
    default:
        grade = "F";
}

document.write("selamat nilai kamu: " + grade);