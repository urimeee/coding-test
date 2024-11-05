function solution(progresses, speeds) {
    var answer = [0];
    let leftProgress = [];

    leftProgress = progresses.map((progress) =>  100 - progress);
    let leftDay = leftProgress.map((leftProgress, index) => Math.ceil(leftProgress / speeds[index]));

    let maxDay = leftDay[0];
    for(let i = 0, j = 0; i < leftDay.length; i++){
       if (leftDay[i] <= maxDay){
           answer[j] += 1;
       }
        else{
            maxDay = leftDay[i];
            answer[++j] = 1;
        }
    }
    return answer;
}