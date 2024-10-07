function range(num,num1,num2)
{
  if(num>=num1 && num<=num2)
    {
        return `this number ${num} is in the range of ${num1} and ${num2}`
    }

    else
    {
        return `${num} is out of the range of ${num1} and ${num2}`
    }
}


function chknum()
{
    let tkinginput = document.getElementById("range").value;
    let result = range(tkinginput,10,20);
    document.getElementById("result").innerText=result;
}