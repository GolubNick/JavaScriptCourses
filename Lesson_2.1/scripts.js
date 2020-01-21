function f (a, b, c) {
    function sum (a = 2, b = 3) {
        return a + b;
    }
}


function f1 (a, b, c) {
    function sum (a = 2, b = 3) {
        return a + b;
    }
	if (typeof c === "function") {
		c();
	}
}

function f2 (a, b, c) {
	let result;
	if (typeof c === "function") {
		result = c();
	}
	if (result === undefined) {
		result = function (a, b) {
			return a + b;
		}(a, b)
	}
	return result;
}

f2(1,5,2);


