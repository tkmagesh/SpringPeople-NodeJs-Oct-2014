//Create a calculator object that exhibits the following methods
/*
-add (x,y)
-subtract (x,y)
-multiply (x,y)
-divide (x,y)

invoke all the methods with values 100 and 200 and print the result
*/
/*
var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
}*/

function Calculator(){

}
Calculator.prototype.add = function(x,y){
    return x + y;
};
Calculator.prototype.subtract = function(x,y){
    return x - y;
};
Calculator.prototype.multiply = function(x,y){
    return x * y;
};
Calculator.prototype.divide = function(x,y){
    return x / y;
};
Calculator.prototype.mod = function(x,y){
    return x % y;
};

module.exports = new Calculator();

