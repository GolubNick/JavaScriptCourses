let flag;
let number;
do{
	flag = false;
	number = prompt('Enter correct number');
	if (isNaN(number) || number === '' || number <= 0){
		flag = true;
	}
} while(flag)
let sqrtNumber = Math.sqrt(number);
for (let i = 1, j = 1; i <= sqrtNumber && j <= 100; i++, j++){
	console.log(`${i}\n`);
}