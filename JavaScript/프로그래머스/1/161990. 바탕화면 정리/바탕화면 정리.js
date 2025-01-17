function solution(wallpaper) {
    var answer = [];
    
    let minValue_first = Infinity;
    let maxValue_second = 0;
    
    let height_first = '';
    
    let rdx = 0;
    let lux = 0;
    
    var firstPosition = [];
    var endPosition = [];
    
    var wallpaper_width = wallpaper[0].length;
    var wallpaper_height = wallpaper.length;
    
    // 먼저 시작 점을 찾는다
    for(let i = 0; i < wallpaper_height; i++){
        rdx = wallpaper[i].indexOf('#');
        if (rdx !== -1){
            // 시작점 중 세로 값을 찾는 로직
            if(height_first.length === 0){
                height_first = i;
            }
            
            // 시작점 중 가로 값을 찾는 로직
            if(rdx < minValue_first){
                minValue_first = rdx;
                firstPosition = [height_first, minValue_first]
            }
        }
    }
    
    // 마지막 점을 찾는다
    for(let i = 0; i < wallpaper_height; i++){
        lux = wallpaper[i].lastIndexOf('#');
        console.log(i, lux)
        // 만약, #을 찾을 수 있다면
        if (lux !== -1){    
            if(maxValue_second < lux){
                maxValue_second = lux;
            }
            endPosition = [i+1, maxValue_second+1]
        }
    }
    return [...firstPosition, ...endPosition]
}