function solution(priorities, location) {
    const queue = priorities.map((prior, idx)=>({prior,idx}));
    let order = 0;

    while(queue.length > 0){
        let current = queue.shift();
        if(queue.some(item => item.prior > current.prior)){
            queue.push(current);
        }
        else {
            order++;
            if (current.idx === location){
                return order;
            }
        }
    }
}