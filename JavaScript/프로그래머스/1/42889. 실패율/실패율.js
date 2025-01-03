function solution(N, stages) {
    var answer = [];

    for(let i = 0; i<N; i++){
        let reachedPlayer = 0;
        let notReachedPlayer = 0;
        
        stages.forEach((stage,idx) =>{
            let expectedValue = stage - (i+1);
            if(expectedValue >=0 ){
                reachedPlayer ++;
            }
            if(expectedValue === 0 ){
                notReachedPlayer ++;
            }
            
        })
        
        answer.push({idx:i+1,value:notReachedPlayer/reachedPlayer});
        answer.sort((a,b)=>{
            if(a.value === b.value){
                return a.idx - b.idx;
            }
            return b.value - a.value;
        });
        
        
    }
    
    let sortedAnswer = answer.map(item=>item.idx);
    
    return sortedAnswer;
}