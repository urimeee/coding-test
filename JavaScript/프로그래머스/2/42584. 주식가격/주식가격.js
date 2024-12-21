function solution(prices) {
    let stack = []; // 값 말고 인덱스를 저장한다.
    let answer = Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length; i++) {
        //stack의 길이가 0이상이고 현재 가격이 스택의 맨위 가격보다 낮을 때 (떨어졌을 때)
        while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]){
                let temp = stack.pop();
                answer[temp] = i - temp;            

        }
                stack.push(i); // 현재 인덱스 저장한다

    }
    
    while(stack.length >0 ) {
        let temp = stack.pop();
        answer[temp] = prices.length - temp -1 ;
    }
    
    return answer;
}