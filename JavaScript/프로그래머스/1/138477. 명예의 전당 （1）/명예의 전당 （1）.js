function solution(k, score) {
    var answer = [];
    var award = [];
    
    score.forEach((s)=>{
        award.push(s)
        award.sort((a,b)=> b-a);
        
        if(award.length > k){
            award.pop();
        }
        
        answer.push(award[award.length-1])
    })
    
    return answer;
}