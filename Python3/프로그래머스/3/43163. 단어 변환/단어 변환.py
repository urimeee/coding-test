from collections import deque

def determineIsOne(word1, word2):
    return sum (1 for a, b in zip(word1, word2) if a!=b) == 1

def bfs(words, target, begin, visited):
    queue = deque([(begin,0)]) # 탐색할 노드 index / 변환횟수
    
    while queue:
        current,number  = queue.popleft()
        print(current, number)
        if current == target:
            return number
        
        for i, word in enumerate(words):
            if not visited[i] and determineIsOne(current, word):
                print(current, target)
                queue.append((word, number+1))
                visited[i] = True
    
    return 0
    
def solution(begin, target, words):
    visited = [False] * len(words)
    
    return bfs(words, target, begin, visited)     
