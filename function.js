function findsum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(findsum(10,20,30));