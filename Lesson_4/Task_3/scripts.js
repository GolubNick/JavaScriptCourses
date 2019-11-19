'use strict'

let numbers = [];
let flag;
for(let i = 0; i < 3; i++){
	do{
		flag = false;
		numbers[i] = prompt(`Enter ${i+1} number`);
		if (isNaN(numbers[i]) || numbers[i] === ''){
			flag = true;
		}
	} while(flag)
}
numbers.sort((x,y) => {
	return x - y
});
console.log(numbers[0]);
console.log(numbers[2]);