function solution(N, number) {
    if ( N === number ) return 1;   
    
    const dp = Array.from({length: 9}, () => new Set());
    
    // dp들을 채워 넣는 과정
    for (let i = 0; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        // dp를 탐색해야 하는데, 1부터 시작하므로
        for (let j = 1; j < i; j++) {
                for (const a of dp[j]) {
                    for (const b of dp [i - j]){
                        dp[i].add(a-b);
                        dp[i].add(a+b);
                        dp[i].add(a*b);
                        if (b!==0) dp[i].add(Math.floor(a/b));
                    }
                }
            if (dp[i].has(number)) return i;
        }
    }
    return -1;
}