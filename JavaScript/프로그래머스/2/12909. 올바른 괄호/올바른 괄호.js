function solution(s){ 
    var answer = true;
    let s1 = s.split('');

    if(s[0] === "(" ){
        if(s[s.length-1] === "("){
                return false;
        }
    }
    
    else if (s[0] === ")") {
        return false;
    }
    let length = s1.length;
    let stack = [];
    // 닫는 괄호들로만 이루어져 있음
    for(let i=0; i < length; i++){
        if(s1[i] === "(") {
            stack.push(s1[i]);
        }
        else {
            stack.pop();
        }
    }
    if(stack.length !=0) return false;
    return true;
  
}