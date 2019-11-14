let r = 5;
let x;
let y;
let isXWrong;
let isYWrong;
do{
	isXWrong = false;
	x = prompt('Enter X');	
	if (isNaN(x) || x === ''){
		alert('X is wrong, please eneter a number');
		isXWrong = true;
	}
} while(isXWrong)

do{
	isYWrong = false;
	y = prompt('Enter Y');
	if (isNaN(y) || y === ''){
		alert('Y is wrong, please eneter a number');
		isYWrong = true;
	}
} while(isYWrong)

let isPointBelongs = (x <= 5 && y <=5 && ((Math.pow((x - 0),2) + Math.pow((y - 0),2)) > (Math.pow(r,2))) );
isPointBelongs ? alert('The point belongs to area') : alert('The point does not belong to area')
