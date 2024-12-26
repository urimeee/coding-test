function solution(s) {
    var answer = [-1];
    for(let i = 1; i < s.length; i++){
        let foundIndex = s.substring(0,i).lastIndexOf(s[i]);

        
        if(foundIndex >= 0){
            // console.log(i, s.substring(0,i), s.substring(0,i).lastIndexOf(s[i]));
            answer.push(i-foundIndex);
        }
        
        else answer.push(foundIndex);
    }
    return answer;
}