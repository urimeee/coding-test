function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = "";
    let temp = "";

    for(let i = 0; i < s.length; i++){
        //s[i]가 문자인 경우
        if(isNaN(s[i])){
            temp += s[i];
            words.forEach((word, idx)=>{
                if(word === temp){
                    answer+=idx;
                    temp = "";
                }}) 
        }
        
        //s[i]가 숫자인 경우
        else{
            console.log("s[i]가 숫자인 경우")
            if(temp.length > 0) {
                console.log("temp에 길이가 있을 경우")
                words.forEach((word, idx)=>{
                    if(word === temp){
                        answer+=idx;
                        temp = "";
                    }
                })
            }
         
            answer += s[i];
            
        }
    }
    return Number(answer);
}