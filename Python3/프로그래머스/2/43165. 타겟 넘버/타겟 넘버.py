from collections import deque
def bfs(numbers, target):
    queue = deque([(0,0)]) # queue에 초기값 할당 값 / index
    count = 0
    
    while queue:
        number, index = queue.popleft()
        
        if index == len(numbers):
            if number == target:
                count += 1
        else:
            next_num = numbers[index]
            queue.append((number + next_num, index+1))
            queue.append((number - next_num, index+1))
            
    return count
        
def solution(numbers, target):
    return bfs(numbers, target)