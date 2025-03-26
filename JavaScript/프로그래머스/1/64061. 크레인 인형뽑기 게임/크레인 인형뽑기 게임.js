function solution(board, moves) {
    const answer_stack = [];
    const board_length = board[0].length;
    
    let answer = 0;
    for(const move of moves){
       for(let i = 0; i < board_length; i++){
           if(board[i][move-1] !== 0){
                const picked = board[i][move-1];
               board[i][move-1] = 0;
               if(answer_stack.length > 0&&picked === answer_stack[answer_stack.length-1]){
                       answer_stack.pop();
                       answer+=2;
                   
               }
               
               else
               {
                    answer_stack.push(picked);
               }
               break;
           }
       }
    }
    return answer;
}