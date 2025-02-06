function solution(today, terms, privacies) {
    var answer = [];
    
    let termMap = new Map();
    
    terms.forEach((term)=> {
        const [type, limit] = term.split(' ');
        termMap.set(type, Number(limit));
    })
    
    const todayArr = today.split('.').map(Number);
    const todayYear = todayArr[0];
    const todayMonth = todayArr[1];
    const todayDay = todayArr[2];
    
    privacies.forEach((privacy, index) => {
        const [privacyDate, privacyType] = privacy.split(' ');
        const [privacyYear, privacyMonth, privacyDay] = privacyDate.split('.').map(Number);
        
        const limitTime = termMap.get(privacyType);
        
        const expireYear = privacyYear + Math.floor((privacyMonth + limitTime - 1) / 12);
        const expireMonth = (privacyMonth + limitTime - 1) % 12 + 1;
        const expireDay = privacyDay;
        
        console.log(todayYear, todayMonth, todayDay, expireYear, expireMonth, expireDay);

        // 만료 날짜를 today와 비교하여 만료된 경우 처리
        if(expireYear < todayYear){
            answer.push(index + 1);
        }
        else if(expireYear === todayYear){
            if(expireMonth < todayMonth){
                answer.push(index + 1);
            }
            else if(expireMonth ===todayMonth) {
                if(expireDay < todayDay) answer.push(index + 1);
                if(expireDay === todayDay) answer.push(index + 1);
            }
        }
    })
    return answer;
}