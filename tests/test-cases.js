tests({
    'add numbers': function(){
        calc.reset();
        eq(2, calc.operate("add", 1, 1));
    },

    'substract numbers': function(){
        calc.reset();
        eq(0, calc.operate("substract", 1, 1));
    },

    'multiply numbers ': function(){
        calc.reset();
        eq(4, calc.operate("multiply",2, 2));
    },
    'divide numbers': function(){
        calc.reset();
        eq(2, calc.operate("divide", 4, 2));
    },

    'add: two positive numbers, should work': function() {
        calc.reset();
        eq(110, calc.operate("add", 100,10));
    },
    
    'substract: two positive numbers, should work': function() {
        calc.reset();
        eq(90, calc.operate("substract", 100, 10));
    },
    
    
    'multiply: two positive numbers, should work': function() {
        calc.reset();
        eq(100, calc.operate("multiply", 50, 2));
    },


    'divide: two positive numbers, should work': function() {
        calc.reset();
        eq(100, calc.operate("divide", 200, 2));
    },

    'add: two negative numbers, should give negative number ': function() {
        calc.reset();
        eq(-12, calc.operate("add", -2, -10));
    },


    'substract: two negative numbers, should give negative number': function() {
        calc.reset();
        eq(-90, calc.operate("substract", -100, -10));
    },


    'multiply: two negative numbers, should give positive number': function() {
        calc.reset();
        eq(100, calc.operate("multiply", -50, -2));
    },


    'divide: two negative numbers, should give positive number': function() {
        calc.reset();
        eq(100, calc.operate("divide", -200, -2));
    },


    'add: one negative number, should give positive number ': function() {
        calc.reset();
        eq(8, calc.operate("add", -2, 10));
    },


    'substract: on negative number, should give negative number': function() {
        calc.reset();
        eq(-90, calc.operate("substract", -100, -10));
    },


    'multiply: first negative numbers, should give positif number': function() {
        calc.reset();
        eq(100, calc.operate("multiply", -50, -2));
    },


    'divide: two negative numbers, should give positif number': function() {
        calc.reset();
        eq(100, calc.operate("divide", -200, -2));
    },

});