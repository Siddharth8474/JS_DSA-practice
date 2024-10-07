function emtystr(str)
{
   if(str=="")
    {
        return "string is empty";
    }

    else
    {
        return "string is not emty";
    }
}

 function chkemtystring()
 {
    let input = document.getElementById("chk").value;
    let result = emtystr(input);
    document.getElementById("result").innerText=result;
 }