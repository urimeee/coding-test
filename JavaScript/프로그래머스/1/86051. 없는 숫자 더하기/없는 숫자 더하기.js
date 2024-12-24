function solution(numbers) {
    let answerArray = [0,1,2,3,4,5,6,7,8,9];
    let sortedNumbers = numbers.sort();
    
    if(numbers.length === 10) return 0;
    
    for(let i = 0 ; i < answerArray.length; i++){
        sortedNumbers.forEach((numbers)=>{
            if(numbers === answerArray[i]){
                answerArray.splice(i,1);
            }
        })
    }
    
    let answer = answerArray.reduce((acc,currentNumber)=> acc+currentNumber,0)
    return answer;
}