function evenodd(num)
{
  if (num%2==0)
    {
        return `${num} is divisible by 2`
    }

    else
    {
        return `${num} is not divisible by 2`
    }
}

// console.log(evenodd(7));

  function chk()
  {
    let input = document.getElementById("chk").value;
    let result = evenodd(Number(input));
    document.getElementById("result").innerText=result
  }