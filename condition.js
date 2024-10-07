function checknum(num)
{
  if(num>5)
    {
        return "num is greter then 5";
    }
    else{
        return "num is not grater then 5";
    }
}

// console.log(checknum(6));   

function checknum1()
{
    let input = document.getElementById("a").value
    let result = checknum(Number(input));
    document.getElementById("result").innerText=result;
}