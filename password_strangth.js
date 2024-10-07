function passwordstrangth(password){
if(password.length>8 && /|d/.test(password) && /[A-Z]/.test(password) && password.includes("@"))
    {
        return "password is strong";
    }

    else{
        return "password is week";
    }
}

function password(){
    let input = document.getElementById("input").value
    let result =passwordstrangth(input);
    document.getElementById("result").innerText=result;
}