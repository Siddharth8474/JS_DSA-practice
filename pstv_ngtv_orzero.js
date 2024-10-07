function chknum(num)
{
    if(num<0)
        {
            return `${num} is nagetive`;
        }

        else if(num>0)
            {
                return `${num} is positive`;
            }

            else
            {
                return `${num} is zero`;
            }
}



function chknum1()
{
    let input = document.getElementById("chk").value;
    let result = chknum(Number(input));
    document.getElementById("result").innerText=result;
}