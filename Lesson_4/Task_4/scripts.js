'use strict'

let fruits = [];
let i = 0;
let flag;
do{
	flag = true;
	let fruit = prompt(`Enter fruit`);
	if (fruit == null){
		flag = false;
	} else {
		fruits[i] = fruit;
		i++;
	}	
} while(flag)

fruits.forEach( x => {
	console.log(x);
});