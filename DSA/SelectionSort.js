const selectionSort=(arr)=>{
 
    for(let i=0; i<arr.length; i++){
        let min = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        
    }
    return arr

}

let arr = [2,1,5,0,3];
console.log(selectionSort(arr))