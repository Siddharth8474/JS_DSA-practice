function swapping(arr){

    let splt = arr.split(' ').map(Number)

    for(let i=0; i<splt.length; i++){
        for(let j=0; j<splt.length; j++){
            if(splt[j]>splt[j+1]){
                let temp = splt[j];
                splt[j] = splt[j+1];
                splt[j+1] = temp
            }
        }
    }

    return splt.join(' ')
}

let arr = "3 1 2 4 5 0";
console.log(swapping(arr))
