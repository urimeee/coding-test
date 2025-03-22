function solution(s) {
    const opened = ["[", "(", "{"]
    const closed = ["]", ")", "}"];
    let answer = 0;
        
    for(let i = 0; i<s.length; i++){
        const stack = [];
        let isValid = true;
        for(let j = 0; j<s.length; j++){
            let start_point = i+j;

            if(opened.includes(s[start_point%s.length])){
                stack.push(s[start_point%s.length]);
            }
            else{
                if(stack.length > 0){
                    if(opened.indexOf(stack[stack.length-1]) === closed.indexOf(s[start_point%s.length]))
                    stack.pop();
                }
                else {
                    isValid = false;
                    break;
                };
            }
        }
        
        if (stack.length === 0 && isValid){
            answer ++;
        }
    }
    return answer;
}