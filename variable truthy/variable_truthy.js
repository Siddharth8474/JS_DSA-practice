function truthyfalshy(variable)
{
  if(variable){
    return "variable is truthy";
  }

  else
  {
    return "variable is falshy";
  }
}



function chkvariable()
{
    let input = document.getElementById("chk");
    let result= truthyfalshy(input);
    document.getElementById("result").innerText=result;  
}