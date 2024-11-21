from collections import deque

queue = deque([])
N = int(input())

for _ in range(N):
    parts = input().split()
    command = parts[0]
    if len(parts) == 2:
        num = int(parts[1])
        
    if command == "push_front":
        queue.appendleft(num)
    if command == "push_back":
        queue.append(num)
    if command == "pop_front":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue.popleft())
    if command == "pop_back":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue.pop())
    if command == "size":
        print(len(queue))
    if command == "empty":
        if len(queue)==0:
            print(1)
        else:
            print(0)
    if command == "front":
        if len(queue)==0:
            print(-1)
        else:
            print(queue[0])
    if command == "back":
        if len(queue) ==0:
            print(-1)
        else:
            print(queue[-1])