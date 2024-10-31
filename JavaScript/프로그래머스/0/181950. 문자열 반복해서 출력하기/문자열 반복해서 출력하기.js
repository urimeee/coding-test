const readline = require("readline");
let stringTemp='';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on("line", (input)=>{
      let temp = input.split(' ');
      for(let i =0; i<temp[1]; i++){
        stringTemp += temp[0];
      }
    console.log(stringTemp);
    }
)

