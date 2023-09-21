// JavaScript source code
/* Tipe Dta*/
let Nama = "Oteng";
let UkuranSepatu = 44;
let benar = true;
let tidakbenar;
let Kosong = null;

        /*Object*/
let person = {
    nama: "Rifan",
    umur: 20
};
console.log("Nama: " + person.nama);
console.log("Umur: " + person.umur);
console.log(" ");

        /* Array */
let Mobil = ["Supra", "Nissan", "Avanza"]
console.log(Mobil);
console.log(" ");

        /* Operator */
/*Aritmatika*/
let a = 5;
let b = 3;
let hasil = a + b;
console.log("Hasil penjumlahan a dan b adalah: " + hasil);
console.log(" ");

// Penugasan
let x = 10;
x += 5; // x sekarang bernilai 15
console.log("Hasil x : " + x);
console.log(" ");

// Perbandingan
let angka1 = 5;
let angka2 = 3;
let sama = angka1 === angka2; // false
console.log("angka1 dan angka2 statusnya adalah" + sama);
console.log(" ");


// Logika
let benar1 = true;
let benar2 = false;
let hasilLogika = benar1 && benar2; // false
console.log("benar1 dan benar2 statusnya adalah" + hasilLogika);
console.log(" ");

//tenary
let umur = 20;
let STATUS = (umur >= 18) ? "Dewasa" : "Anak-anak";
console.log("Status: " + STATUS);
console.log(" ");



        /*Repetition*/
//FOR
console.log(" ");
console.log("FOR");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//IF
console.log(" ");
console.log("IF");
let A = 50
if (A < 30) {
    console.log("A lebih kecil dari 30");
}
else if (A > 30)
{
    console.log("A lebih besar dari 30");
} 
else {
    console.log("A nilainya 30");
}

//Switch
console.log(" ");
console.log("Switch");
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
}


//Foreach 
console.log(" ");
console.log("Foreach");
let buah = ["apel", "pisang", "ceri"];
buah.forEach(function (item) {
    console.log(item);
});

//DO WHILE
console.log(" ");
console.log("Do While");
let angka =0;
do {
    console.log(angka);
    angka++;
} while (angka < 5);

//While
console.log(" ");
console.log("While");
let angka3 = 4;
while (angka3 >= 0) {
    console.log(angka3);
    angka3--;
}


        /*Function*/
//Declaration
function tambah(a, b) {
    return a + b;
}
//Exprssion
let tambah1 = function (a, b) {
    return a + b;
};
//Arrow
let tambah2 = (a, b) => a + b;




// Property
const element = document.getElementById("myElement");
const textContent = element.textContent;

// Method
element.textContent = "Konten teks baru";

// Validation form
const form = document.getElementById("myForm");
if (!form.checkValidity()) {
  // Form tidak valid
}

// CSS
const div = document.createElement("div");
div.style.fontFamily = "Arial";
document.body.appendChild(div);





