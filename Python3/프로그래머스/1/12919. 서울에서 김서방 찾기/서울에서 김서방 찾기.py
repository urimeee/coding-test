def solution(seoul):
    answer = ''
    print(seoul)
    for index, data in enumerate(seoul):
        if data == "Kim":
            return f"김서방은 {index}에 있다"
    return answer