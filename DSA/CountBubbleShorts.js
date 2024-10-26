function CountBubbleShort(arr){

     let count=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp

                count++;
            }
        }
    }
    return {arr,count}

}

let arr = [2,0,1,8,7,9,3];
console.log(CountBubbleShort(arr))