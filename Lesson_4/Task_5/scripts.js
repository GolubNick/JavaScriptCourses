'use strict'

let OneHundresDollars = 2772.4;
let newSumma;
let newRates;

let rates = OneHundresDollars / 100;
newSumma = getValue('summa');
newRates = getValue('rates');

console.log(((rates * newSumma) - (newRates * newSumma)).toFixed(2));

function getValue(value = ''){
	let flag;
	let number;
	do{
		flag = false;
		number = prompt(`Enter correct new ${value}`)
		if (isNaN(number) || number === '' || number < 0){
			flag = true;
		}
	} while(flag);
	return number;
}