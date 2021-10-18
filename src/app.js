
//JS type safe değildir değişken tipi ayırt etmeden çıktı verir.
console.log("Merhaba Kodlama.io")

let dolarDun = 9.20

let dolarBugun = 9.30

//var keyword ile kullanılırsa çakışır bu şekilde bloğun dışıundaki veriyi basar
{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const olarak tanımlandığı için read only hatası verir başka bir değer atanamaz
const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

//Array oluşturma
let konutKredileri = ["Konut Kredisi","İhtiyaç Kredisi","Araç Kredisi","Diğer"]

console.log("<ul>")

for(let i = 0;i<konutKredileri.length;i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")