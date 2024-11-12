import sys
input = sys.stdin.read
from collections import deque

data = input().splitlines()
n,m = map(int, data[0].split())

canvas = [list(map(int, line.split())) for line in data[1:n+1]]

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start[0]][start[1]] = True
    area_size = 1  # 그림의 크기를 저장하는 변수, 시작점도 포함하므로 1로 초기화

    while queue:
        y, x = queue.popleft()
        # 탐색 시작, 위치 위 아래 좌 우로 가야되니까 위치 추가
        directions = [(-1,0), (1, 0), (0, 1), (0, -1)]
        for dy, dx in directions:
            ny = y + dy
            nx = x + dx
            
            if 0 <= ny < n and 0 <= nx < m and not visited[ny][nx] and graph[ny][nx] == 1:
                queue.append((ny, nx))
                visited[ny][nx] = True
                area_size += 1
    return area_size
                
visited = [[False] * m for _ in range(n)]

picture_count = 0
max_area_size = 0

for i in range(n):
    for j in range(m):
        if canvas[i][j] == 1 and not visited[i][j]:
            picture_count += 1
            area_size = bfs(canvas, (i,j), visited)
            max_area_size = max(max_area_size, area_size)

print(picture_count)
print(max_area_size)