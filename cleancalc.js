//defines global object called calc
var calc = {
    lastResult: null,
    reset: function(){
        return this.lastResult = 0;
    },
    operate: function(operation, arg1, arg2){ 
        if(arg2){
            return this.lastResult= this[operation](arg1, arg2);    
        }else{
            return this.lastResult= this[operation](arg1, this.lastResult); 
        }
    },

    add: function(arg1, arg2){
        return arg1 + arg2;
    },    
    substract: function(arg1, arg2){
        return arg1 - arg2;
    },

    multiply: function(arg1, arg2){
        return arg1 * arg2;
    },

    divide: function(arg1, arg2){
        return arg1 / arg2;
    }
  
  };

//export is always at the end of the file
//it needs to refer to actual object names
module.exports = calc