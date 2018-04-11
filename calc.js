

var lastResult = null;

function add (arg1, arg2){
	return arg1 + arg2;
}

function substract (arg1, arg2){
	return arg1 - arg2;
}

function multiply (arg1, arg2){
	return arg1 * arg2;
}

function divide (arg1, arg2){
	return arg1 / arg2;
}

//-------- v 1.1.0 --------

function operateIntermediary(operation, arg1, arg2){
	return operation(arg1, arg2);
}

lastResult= operateIntermediary(add, 5, 10); // 15
lastResult = operateIntermediary(multiply, 2, lastResult); // 2*15 = 30

console.log(lastResult);
console.log(operateIntermediary (multiply, 5, 5));