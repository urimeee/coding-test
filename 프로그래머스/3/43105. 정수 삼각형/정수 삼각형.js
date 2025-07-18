function solution(triangle) {
    const n = triangle.length;
    const memo = Array.from({length:n}, (_,i) => Array(triangle[i].length).fill(-1));
    
    function dp (i,j) {
        if(i === n - 1) return triangle[i][j];
        if (memo[i][j] !== -1) return memo[i][j];
        
        const left = dp(i+1, j);
        const right = dp(i+1, j+1);
        memo[i][j] = triangle[i][j] + Math.max(left, right);
        
        return memo[i][j]
    }
    return dp(0,0)
}