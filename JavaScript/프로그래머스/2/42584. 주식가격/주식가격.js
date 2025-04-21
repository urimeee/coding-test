function solution(prices) {
    const n = prices.length;
    var answer = new Array(n).fill(0);
    
    const stack = [];
    for (let i = 0; i < n; i++){
        while (stack.length > 0 && prices[i] < prices[stack[stack.length-1]]){
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    while (stack.length > 0){
        const j = stack.pop();
        answer[j] = n-j-1;
    }
    
    return answer;
}