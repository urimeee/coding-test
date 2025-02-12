function solution(numbers) {
    var array = [];
    var answer = [];
    for(let i =0; i<numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            array.push(numbers[i]+numbers[j]);
        }
    }
    answer = [...new Set(array)].sort((a,b)=>(a-b));
     
    return answer;
}