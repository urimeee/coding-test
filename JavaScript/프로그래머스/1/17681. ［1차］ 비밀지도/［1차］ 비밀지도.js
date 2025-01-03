function solution(n, arr1, arr2) {
    let answer = [];
    
    // 각 배열에 대해 이진수로 변환하고, n길이에 맞게 패딩 추가
    let newArray1 = arr1.map((arr) => {
        return arr.toString(2).padStart(n, '0');
    });
    
    let newArray2 = arr2.map((arr) => {
        return arr.toString(2).padStart(n, '0');
    });
    
    // 두 배열의 이진수 OR 연산을 통해 비밀 지도 생성
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j < n; j++) {
            // 두 지도에서 해당 자리의 이진수 값 비교 후, OR 연산
            if (newArray1[i][j] === '1' || newArray2[i][j] === '1') {
                row += "#";
            } else {
                row += " ";
            }
        }
        
        answer.push(row);  // 결과 행을 배열에 추가
    }

    return answer;
}
