var calc = require('./cleancalc') // tutaj powinnien być w takim razie calc zamiast calculator 

let args = process.argv.slice(2);
let operation = args[0]; //add
    let arg1 = args[1]; //2
    let arg2 = args[2]; //2
let result = calc.operate(operation, arg1, arg2) 
console.log(result)

//jak widzisz cos jest zle, bo dla 1 i 2 zrobil 12 zamiast 3. Wiec teraz mozesz sie bawic.
//Na gorze widzisz takie strzalki. Skip Over -> nastepna linia Step in -> Wchodzi glebiej (w wywolanie) Step out -> wraca z wywolania