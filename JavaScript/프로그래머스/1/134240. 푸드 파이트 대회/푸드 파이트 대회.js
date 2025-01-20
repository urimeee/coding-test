function solution(food) {
    var answer = '';
    var answerArray = [];
    
    for(let i = 1; i < food.length; i++){
        if(food[i]%2 !== 0){
            //홀수
            answer += i.toString().repeat(Math.floor(food[i] / 2));
        }
        else{
            answer += i.toString().repeat(food[i] / 2);
        }
    }
    answerArray.push(answer);
    answerArray.push(answer.split('').reverse().join(''))
    return answerArray.join('0');
}