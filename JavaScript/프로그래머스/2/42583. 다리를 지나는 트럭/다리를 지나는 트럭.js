function solution(bridge_length, weight, truck_weights) {
    var time = 0;
    let bridge_weight = 0;
    let bridge = Array(bridge_length).fill(0);

    while(truck_weights.length > 0 || bridge_weight > 0){
        time++;
        bridge_weight -= bridge.shift();

        if(bridge_weight + truck_weights[0] <= weight){
            let truck = truck_weights.shift();
            bridge.push(truck);
            bridge_weight+=truck;
        }
        
        else {
            bridge.push(0)
        }
    }
    return time;
}