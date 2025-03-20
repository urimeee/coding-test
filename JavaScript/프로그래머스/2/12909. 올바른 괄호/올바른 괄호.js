function solution(s){
    let stack = [];
    
    for(const char of s){
        if(char === "(") stack.push(char);
        else {
            if(stack.length ===0){
                return false;
            }
            stack.pop()
        };
    }
    
    if(stack.length > 0){
        return false;
    }
    else return true;

}