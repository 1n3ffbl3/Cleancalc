var render_component = function(container){
    var n_container = document.getElementById(container);

    var first_input = document.createElement("input");
    first_input.setAttribute("id","number1");

    var second_input = document.createElement("input");
    second_input.setAttribute("id", "number2");

    var button = document.createElement("button");
    button.setAttribute("id", "addButton");
    button.setAttribute("class", "btn btn-light");
    button.innerHTML ="operation:"

    var display = document.createElement("input");
    display.setAttribute("id", "operation");

    n_container.appendChild(first_input);
    n_container.appendChild(second_input);
    n_container.appendChild(button);
    n_container.appendChild(display);

    var analyze_button = document.getElementById("addButton")
    analyze_button.addEventListener("click", htmlCalcListener)
}

// render_component("calc-div")