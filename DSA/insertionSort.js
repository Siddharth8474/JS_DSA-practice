function insertionsort(arr){
    let currentValue;

    for(let i=1; i<arr.length; i++){
        currentValue=arr[i];

       let j=i-1;

       while(j>=0){
          if(arr[j] > currentValue){
            arr[j+1] = arr[j]
            j--
          }

          else{
            break;
          }

          arr[j+1] = currentValue;
       }
    }
    return arr;
}

let arr = [1,5,3,2,0]

console.log(insertionsort(arr))