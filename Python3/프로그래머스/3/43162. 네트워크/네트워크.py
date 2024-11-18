from collections import deque
# bfs에 n, computers, visited 배열 전달
def bfs(computers, start, visited, n):
    # queue로 그냥 노드 탐색
    queue = deque([start])
    # 시작 컴퓨터 방문 처리
    visited[start] = True
    while queue:
        current = queue.popleft() # 초기 상태는 0번 컴퓨터의 [0]번 컴퓨터와의 연결 상태

        for next_computer in range(n):
            if computers[current][next_computer] == 1 and not visited[next_computer]:
                queue.append(next_computer)
                visited[next_computer] = True
                    
def solution(n, computers):
    # 서로 연결된 노드만 visited하면 됨
    visited = [False] * n
    count = 0
    for i in range(n):
        if not visited[i]:
            bfs(computers, i, visited, n)
            count +=1
    return count