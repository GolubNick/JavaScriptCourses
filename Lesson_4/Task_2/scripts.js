'use strict'

let number;
let flag;
let amountCorrectNumber = 0;
do{
	flag = false;
	number = prompt('Enter correct number');
	if (isNaN(number) || number === '' || number <= 0){
		flag = true;
	}
} while(flag)
	
for(let i = 2; i <= number; i++){
	if (number % i == 0){
		amountCorrectNumber++;
	}
}
console.log(amountCorrectNumber == 1 || number == 1? 'Number is correct' : 'Number is incorrect');