from collections import deque
def bfs(graph, visited):
    queue = deque([(0,0,1)]) # 초기위치 (x, y)
    count = 0
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    
    while queue:
        y,x, dist = queue.popleft()
        
        if y == len(graph) -1 and x == len(graph[0]) -1:
            return dist
        
        for dy, dx in directions:
            ny, nx = y + dy, x + dx
            if 0 <= ny <len(graph) and 0 <= nx < len(graph[0]):
                if(graph[ny][nx]==1 and not visited[ny][nx]):
                    visited[ny][nx] = True
                    queue.append((ny, nx, dist+1))
    return -1
        
def solution(maps):
    visited = [[False] * len(maps[0]) for _ in range(len(maps))]
    return bfs(maps, visited)