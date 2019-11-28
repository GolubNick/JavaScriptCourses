let goods = [{name: "name1", price: 22, category: "category1"},
{name: "name1", price: 12, category: "category2"},
{name: "name1", price: 33, category: "category3"},
{name: "name1", price: 42, category: "category1"},
{name: "name2", price: 78, category: "category1"},
{name: "name3", price: 99, category: "category1"},
{name: "name1", price: 12, category: "category1"},
{name: "name1", price: 88, category: "category1"},
{name: "name1", price: 90, category: "category1"},
{name: "name1", price: 1, category: "category1"}];

alert(getGoods());
alert(getGoodsByPrice());
alert(getGoodsByCategory("category2"));
alert(getGoodsByCategory("category1"));

function setGoods(name, price, category){
	let thing = {
		name: name,
		price: price,
		category: category
	};
	goods.push(thing);
}

function getGoods(){
	return goods;
}

function getGoodsByPrice(min, max){
	return goods.map(x => { 
	if (min < x && x < max){
		return x;
	}
	});
}

function getGoodsByCategory(category){
	return goods.map(x => x.includes(category));
}

function getGoodsByCategory(category){
	let count = 0;
	goods.map(x => {
		if (x.category.includes(category)){
			count++;
		}
	});
	return count;
}