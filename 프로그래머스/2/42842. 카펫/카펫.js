function solution(brown, yellow) {
    var answer = [];
    let answerWidth = 0;
    let answerHeight = 0;
    
    let yellowWidth = 0;
    let yellowHeight = 0;
    
    console.log(Math.sqrt(yellow))
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow % i === 0){
            console.log("나눈 값 : "+yellow/i , i)
            if(yellow / i >= i){
                yellowWidth = yellow/i;
                yellowHeight = i;
            }
            answerWidth = yellowWidth + 2;
            answerHeight = yellowHeight + 2;
            console.log(answerWidth, answerHeight)
            
            if ((answerWidth * 2 + yellowHeight * 2) === brown) {
                answer.push(answerWidth);
                answer.push(answerHeight);
            }
        }
    }
    return answer;
}