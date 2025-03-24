function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length; i++){
        let temp = 0;
        
        for (let j = i+1; j < prices.length; j++){
            temp ++;
            if (prices[i] > prices[j]) {
                answer[i] = temp;
                break;
            }
            answer[i] = temp;

        }
    }
    
    return answer;
}