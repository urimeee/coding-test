function solution(name, yearning, photo) {
    var answer = [];
    let value = {};
    
    value = name.reduce((acc,n,index)=>{
        acc[n] = yearning[index];
        return acc;
    },{})
    
    for(let i=0; i<photo.length; i++){
        let resultPerPhoto = photo[i].reduce((acc,pic,index)=> {
            if(value[pic]===undefined){
                return acc + 0;
            }
        
            return acc + value[pic];
            // console.log(acc)
            // return acc
        },0)
        console.log(resultPerPhoto)
        answer.push(resultPerPhoto)
        
    }
    return answer;
}