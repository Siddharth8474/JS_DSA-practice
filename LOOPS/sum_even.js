function sumeven(num){
    let sum=0;
    let count=0;

  for(let i=1; i<=num; i++)
    {
        if(i%2===0)
            {
                sum+=i;
                count++;
            }
           
    }
    return sum;
}

console.log(sumeven(10));