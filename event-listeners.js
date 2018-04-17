function htmlCalcListener() {
    // retrieve user input and clean it
    var a; // to tell the difference between no number and 0
    var pre_a = document.getElementById("number1").value;
    if (pre_a == '') {
        a = undefined; // try Number('') to see why I do this
    } else {
        a = Number(pre_a);
    };

    var b;
    var pre_b = document.getElementById("number2").value;
    if (pre_b == '') {
        b = undefined;
    } else {
        b = Number(pre_b);
    }

    var operation;
    var pre_operation = document.getElementById("operation").value;
    if (pre_operation == '') {
        operation = undefined;
    } else {
        operation = pre_operation;
    }
    
    // pass through logic as pure values
    var result = calc.operate(operation, a, b);

    // draw result to dom	
    var outputbox = document.getElementById("output")
    outputbox.innerHTML = result
}

var operator_button = document.getElementById("addButton");
operator_button.addEventListener("click", htmlCalcListener);