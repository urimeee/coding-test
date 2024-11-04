function solution(s) {
    var answer = [];
    let sArray = s.split('');
    let length = s.length;
    if (s.length % 2 === 0){
        answer = s[(length/2)-1]+s[length/2];
        return answer;
    } 
    return sArray[parseInt(length/2)];
    
}

solution