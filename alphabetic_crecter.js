function alphabetic(str){
   if(/^[a-zA-Z]+$/.test(str))
    {
        return "have alphabetic cracters";
    }
    else{
        return "dont have alphabetic cracter";
    }
}

function alpha(){
    let input=document.getElementById("alpha").value
    let result=alphabetic(input);
    document.getElementById("result").innerText=result;
}