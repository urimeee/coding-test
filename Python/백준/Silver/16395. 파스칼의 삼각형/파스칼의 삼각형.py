n, k = map(int, input().split())
answer = [[1]*(1+i) for i in range (n)]

for i in range(2,n):
    for j in range(1,i):
        answer[i][j]=answer[i-1][j-1]+answer[i-1][j]

print(answer[n-1][k-1])