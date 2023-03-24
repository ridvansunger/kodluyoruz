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


// 1-) break için basit örnek
// normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı
//için dögüden çıkıldı hemen orda döngü sonlandırıldı
for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    console.log("i:" + i);
   }
   console.log("break Döngüden çıkıldı");
   
   //2-) continue için basit örnek
   // 1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
   //işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
   for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log("i:" + i);
   }
   console.log("Döngüden çıkıldı");



//İç içe döngü örneği
//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
 for (var i = 0; i <= 10; i++) {
     console.log("dış döngü: " + i);
     for (var j = 0; j <= 5; j++) {
       if (j == 3) {
         break;
       }
       console.log("iç döngü" + j);
    }
 }

///break continue
//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 15) {
        break cikis_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }



  

   ///While
var degisken = 1;
while (degisken <= 10){
 
 console.log ("degiskenin degeri: " + degisken ) 
  
 degisken++;
}

///Sorular
//Filter
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

 // Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
 const personBigger30= person.filter(p=>p.age>30);
 personBigger30.forEach(item=>{
    console.log(item);
 })
//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const knowJavaScript=person.filter(p=>p.languages.includes("JavaScript"));
knowJavaScript.forEach(item=>{
    console.log(item);
})