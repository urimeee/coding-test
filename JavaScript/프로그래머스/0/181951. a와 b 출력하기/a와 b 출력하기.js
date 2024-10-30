const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    var characters = line.split(' ');
    console.log(`a = ${characters[0]}`);
    console.log(`b = ${characters[1]}`);
})
