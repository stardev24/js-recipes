// input string - error in file in.txt error in error 
/*
    input param will be the string(log)
    we have to give output as most frequent word from that string
*/

function findMostFrequentWord(inputStr){
    var inputArr = inputStr.split(" ")

    var m = new Map()
    var countObj = {key:'',value:0}
    for(let i=0;i<inputArr.length;i++){
        console.log("Every word from array ",inputArr[i]);
        if(m.has(inputArr[i])){
            //increase the counter
            m.set(inputArr[i],m.get(inputArr[i])+1)
        }else{
            //don;t have in map
            m.set(inputArr[i],1)
        }
    } 

    console.log("Print the final map to find most frequent word ",m)

    m.forEach((value,key) => {       // 1 ,2, 4
        if(countObj.value < value){
            countObj.key = key
            countObj.value = value
        }
    })
    console.log("Highest frequent word will be ",countObj.key,countObj.value, " times")

    return countObj;
}


