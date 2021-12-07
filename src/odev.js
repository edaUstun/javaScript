/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if ) */
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let durum = 0;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        durum++;
      }
    }
    if (numbers[i] == 1) {
      console.log(numbers[i] + " sayisi asal degildir.");
    } else if (durum == 1 || durum > 1) {
      console.log(numbers[i] + " sayisi asal degildir.");
    } else {
      console.log(numbers[i] + " sayisi asaldir.");
    }
  }
}
findPrime(1, 2, 3, 4, 5, 6, 7);

/* 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.*/
let total1 = 0;
let total2 = 0;

function isFriend(num1, num2) {
  for (let i = 0; i < num1; i++) {
    if (num1 % i == 0) {
      total1 += i;
    }
  }
  for (let j = 0; j < num2; j++) {
    if (num2 % j == 0) {
      total2 += j;
    }
  }

  if (total1 === num2 && total2 === num1) {
    console.log(num1 + " ve " + num2 + " Arkadas Sayilar");
  } else {
    console.log(num1 + " ve " + num2 + " Arkadas Sayi Degiller");
  }
}
isFriend(220, 284);
isFriend(221, 285);

/* 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız. */
let sayi = 1;
for (let sayi = 1; sayi <= 1000; sayi++) {
  let toplam = 0;
  for (let i = 1; i < sayi; i++) {
    if (sayi % i == 0) {
      toplam += i;
    }
  }
  if (toplam == sayi) {
    console.log(sayi + " mükemmel bir sayidir");
  }
}

/* 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */
let number = 1;
for (let i = 2; i < 1000; i++) {
  let durum = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      durum++;
    }
  }
  if (durum == 1 || durum > 1) {
    //console.log(i + " sayisi asal degildir.");
  } else {
    console.log(i + " sayisi asaldir.");
  }
}
