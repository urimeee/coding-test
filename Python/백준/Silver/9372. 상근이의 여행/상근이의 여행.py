import sys
T=int(input())
for i in range(T):
    nation, plane = map(int, sys.stdin.readline().split())
    for _ in range(plane):
        input()
    print(nation-1)