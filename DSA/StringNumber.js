function swapped(arr){
    
   for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j+1] = temp;
        }
    }
   }
   return arr;
}

let arr = ['2','4','1','3','0'];
console.log(swapped(arr))