from collections import deque
def bfs(numbers, target):
    count=0
    queue = deque([(0,0)]) #0 currentNum / 0 index
    
    while queue:
        currentNum, index = queue.popleft()
        
        if index == len(numbers):
            if target == currentNum:
                count += 1
        else:
            next_Num = numbers[index]
            queue.append((currentNum+next_Num, index+1))
            queue.append((currentNum-next_Num, index+1))
    return count

def solution(numbers, target):
    return bfs(numbers,target)
        