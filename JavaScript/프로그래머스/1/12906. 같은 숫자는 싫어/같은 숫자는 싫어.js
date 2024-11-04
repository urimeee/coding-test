function solution(arr)
{
    let answer = [];
    let temp = 0;
    temp = arr[0];
    for(let i = 0; i < arr.length; i++){
       temp = arr[i];
        if(temp !== arr[i+1]){
            answer.push(temp);
        }
    }
    return answer;
}