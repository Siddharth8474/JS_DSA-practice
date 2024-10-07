function validemail(email){
if(email.includes("@") && email.includes("."))
    {
        return "valid email";
    }

    else{
        return "invalid email";
    }
}

function email(){
    let input = document.getElementById("input").value;
    let result = validemail(input);
    document.getElementById("result").innerText=result;
}