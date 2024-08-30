answer=[]
while True:
    l,p,v = map(int, input().split())
    if l==0 and p==0 and v==0:
        break
    camping_days=(v//p)*l
    answer.append(camping_days+min(v%p,l))
    
for i in range(len(answer)):
    print(f"Case {i+1}: {answer[i]}")