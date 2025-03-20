function solution(dirs) {
    const path = new Set();
    let Y=0, X = 0;

    for(const dir of dirs){
        let newY = Y;
        let newX = X;
        
        if(dir === "U") newY++;
        if (dir === "D") newY--;
        if (dir === "R") newX++;
        if (dir === "L") newX--;
    
       if(Math.abs(newX)>5 || Math.abs(newY) > 5){
            continue;
        }
        const sortedPath = [`${X},${Y}`, `${newX},${newY}`].sort().join("->");
        path.add(sortedPath)
        X=newX;
        Y=newY
    }
    return path.size;
}