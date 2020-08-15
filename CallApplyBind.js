var obj = {num:4}


var addition = function(a,b){
    return this.num + a + b
}

console.log(addition.call(obj,6,5)) // prints 15


console.log(addition.apply(obj,[8,9])) //prints 21


var boundFn = addition.bind(obj)

console.log("Bind --->",boundFn(1,2))