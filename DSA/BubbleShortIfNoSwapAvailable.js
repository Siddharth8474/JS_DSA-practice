function swp(arr){

    for(let i=0; i<arr.length; i++){
        let swap = false
      for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

            swap=true
        }
      }
      if(!swap){
        break;
      }
      console.log(swap)
    }
    return arr
}

let arr = [3,1,5,3,7,3,0,1,2,3,4,5,6];
console.log(swp(arr))