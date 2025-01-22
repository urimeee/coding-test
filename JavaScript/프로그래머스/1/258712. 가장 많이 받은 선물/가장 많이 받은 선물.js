//friends - 친구들의 이름, gifts - 주고받은 선물 기록
function solution(friends, gifts) {
    let nextMonth = Array(friends.length).fill(0);
    const giftCount = Array.from({length: friends.length}, () => Array(friends.length).fill(0));
    const giftScore = new Map();
    
    //선물 지수 초기화
    friends.forEach((friend)=> giftScore.set(friend, 0));
    
    gifts.forEach((gift)=>{
        const [from, to] = gift.split(' ');
        giftCount[friends.indexOf(from)][friends.indexOf(to)]++;
        giftScore.set(from, giftScore.get(from) + 1);
        giftScore.set(to, giftScore.get(to) - 1);
    })
    
    for(let i = 0; i < giftCount.length; i++){
        for (let j = i+1; j < giftCount.length; j++){
            if(giftCount[i][j] > giftCount[j][i]) nextMonth[i]++;
            else if(giftCount[i][j] < giftCount[j][i]) nextMonth[j]++;
            else{
                //선물 지수
                if(giftScore.get(friends[i])>giftScore.get(friends[j])) nextMonth[i]++;
                else if (giftScore.get(friends[i])<giftScore.get(friends[j])) nextMonth[j]++;
            }
        }
    }
    
    return Math.max(...nextMonth);
}