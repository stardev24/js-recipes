
//Simple Closure

var addTo = function(outer){

    var add = function(inner){
        return outer+inner
    }
    return add 

}

var test = addTo(4)

test(2) // 6

addTo(3)(3) //6

console.dir(test)
/* arguments:null
   caller: null
   length: 1
   name: "add"
   prototype: {constructor: ƒ}__proto__: ƒ ()
   [[FunctionLocation]]:
   [[Scopes]]: Scopes[2]
   0: Closure (addTo)
    outer: 4
   1: Global {parent: Window, opener: null, top: Window, length: 8, frames: Window, …}
   $jscomp: {scope: {…}, ASSUME_ES5: false, ASSUME_NO_NATIVE_MAP: false, arrayIteratorImpl: ƒ,
    arrayIterator: ƒ, …}COMPILED: falseGoog_AdSense_Lidar_getUrlSignalsArray: */


    for(let i=0;i<4;i++){

        const f = () =>{
             console.log(i)
         }
         f()                    //let vs var
     }