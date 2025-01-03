function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let row = "";
        let result = arr1[i] | arr2[i];
        // 11101
        // 밑에서부터는 각 자리가 1인지 아닌지 판단해야한다.
        for (let j = n-1 ; j>=0; j--){
            if(result&(1 << j)){
                row += "#";
            }
            else {
                row += " ";
            }
        }
        
        answer.push(row);  // 결과 행을 배열에 추가
    }

    return answer;
}
