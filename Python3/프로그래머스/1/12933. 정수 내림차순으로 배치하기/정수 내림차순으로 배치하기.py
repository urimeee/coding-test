def solution(n):
    answer = ''
    n_string = str(n)    
    n_list = list(map(int, n_string))
    n_list.sort(reverse=True)
    for i in (n_list):
        answer+=str(i)
    return int(answer)