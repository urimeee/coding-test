function solution(progresses, speeds) {
    var answer = [];
    let leftProgresses = progresses.map((progress, i) => (Math.ceil((100-progress)/speeds[i])));
    let deployDate = leftProgresses[0];
    
    let temp = 0;
    for (let i = 0; i < leftProgresses.length; i++) {
        if (leftProgresses[i] <= deployDate) {
            temp ++;
        }
        else {
            answer.push(temp);
            deployDate = leftProgresses[i]
            temp = 1;
        }
    }
    answer.push(temp);
    return answer;
}