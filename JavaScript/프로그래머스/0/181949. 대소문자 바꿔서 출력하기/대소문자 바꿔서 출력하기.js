const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on("line",function(line){
    const strArray = [...line]
    strArray.forEach((str,index)=>{
        if(str === str.toUpperCase()){
            strArray[index] = str.toLowerCase()
        }
        else strArray[index]=str.toUpperCase()
    })
    
    console.log(strArray.join(''));
    rl.close();
})