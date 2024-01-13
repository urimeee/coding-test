function solution(participant, completion) {
   var count=0;
    var del=0;

    var result_index=[];
    participant.sort();
    completion.sort();
 
    for(var i=0; i<participant.length;i++){
        if(participant[i]!=completion[i]){
            return participant[i];
        }
    }
}