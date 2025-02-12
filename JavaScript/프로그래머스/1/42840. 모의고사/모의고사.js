function solution(answers) {
    var answer = [];
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    const scores= [0, 0, 0]
    
    for(const [i, answer] of answers.entries()){
        for(const [j, pattern] of patterns.entries()){
            if(answer === pattern[i%pattern.length]){
                scores[j]++;
            }
        }
    }
    
    let maxAnswer = Math.max(...scores)
    
    for(let i = 0; i < scores.length; i++){
        if(scores[i] === maxAnswer){
            answer.push(i+1);
        }
    }
    
    return answer.sort((a,b)=>a-b);
}