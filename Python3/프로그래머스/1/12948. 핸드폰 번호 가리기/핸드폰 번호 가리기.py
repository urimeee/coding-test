def solution(phone_number):
    length = len(phone_number)
    prefix=''
    for _ in range (length-4):
        prefix += "*"
    return ( prefix +str(phone_number)[length-4:length])
    
