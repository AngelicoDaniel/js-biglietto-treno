// const MoneyPerKm = '0.21';
// console.log('MoneyPerKm')

//   let km = parseInt(prompt('Quanti km vuole percorrere?'))
//  console.log('KmPercorso')

//   let age = parseInt(prompt('Quanti anni hai?'))
//   console.log('userAge')

//   let price = km * MoneyPerKm;
//   console.log('price')

//   if (age < 18) {
//       price = price * 0.8;
//       console.log('minorenne')
//   } else if (age > 65){
//       price = price * 0.6;
//       console.log('over65')
//   } else {
//       finalPrice = price
//       console.log('default')
//   }

//   document.getElementById('finalPrice').innerHTML = `prezzo finale: ${price.toFixed(2)}` 









function generaPrezzo(){

const MoneyPerKm = '0.21';
let valueKm = document.getElementById('km').value;
let valueage = document.getElementById('age').value;
let price = valueKm * MoneyPerKm;


if (valueage < 18) {
    price = price * 0.8;
    console.log('minorenne')
} else if (valueage > 65){
    price = price * 0.6;
    console.log('over65')
} else {
    finalPrice = price
    console.log('default')
}

document.getElementById('finalPrice').innerHTML = `il prezzo finale è: ${price.toFixed(2)}`

}