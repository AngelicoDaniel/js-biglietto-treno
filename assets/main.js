const MoneyPerKm = '0.21';
console.log('MoneyPerKm')

let km = parseInt(prompt('Quanti km vuole percorrere?'))
console.log('KmPercorso')

let age = parseInt(prompt('Quanti anni hai?'))
console.log('userAge')

let price = km * MoneyPerKm;
console.log('price')

if (age < 18) {
    price = price * 0.8;
    console.log('minorenne')
} else if (age > 65){
    price = price * 0.6;
    console.log('over65')
} else {
    finalPrice = price
    console.log('default')
}

document.getElementById('finalPrice').innerHTML = `prezzo finale: ${price.toFixed(2)}` 











// function generaPrezzo(){

//     console.log('ho attivato la funziona generaPrezzo')


//     let valuekm = document.getElementById('km').value;

//     let age =

// }