//Soru 1

let dizi1 = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let newDizi=[];
 dizi1.forEach((sayi)=>{
        if(sayi>10)
        {
            newDizi.push(sayi*5);
        }
 
})
console.log(newDizi);

//Soru 2

let dizi2 = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi2){
// Kodunuzu buraya yazın.
 let sonuc= dizi2.some((value)=>{
    if(value>5)
        return true;
 })
 if(sonuc)
    console.log("5 ten büyük sayı var");
 else
    console.log("5 ten büyük sayı yok");
}

myFunction(dizi2);


//Soru 3
let dizi3=[2,3,4];
// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
//foreach
let fac=1;
dizi3.forEach((sayi)=>{
fac*=sayi;
})  
console.log(fac);


//forin
let factor=1;
for (const key in dizi3) {
    
   factor*=dizi3[key];
}
console.log(factor);

