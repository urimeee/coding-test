function solution(people, limit) {
    var answer = 0;
    let weightOnBoat = 0;
    
    let left = 0;
    let right = people.length - 1;
    
    // people을 오름차순으로 정렬
    people.sort((a,b) => a-b);

    while (left <= right) {
        if(people[left] + people[right] <= limit) {
            left ++;
        }
        right --;
        answer++;
    }
    
    return answer;
}