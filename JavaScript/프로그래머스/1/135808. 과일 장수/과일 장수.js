function solution(k, m, score) {
    var answer = 0;
    var numOfBox = Math.floor(score.length/m);
    
    score.sort((a,b)=> b-a);
    
    for(let i = 0; i < numOfBox; i++){
        let box = score.slice(i*m, m*i+m); // m개씩 분리한 택배 상자. 
        answer += Math.min(...box) * m;
    }
    
    return answer;
}