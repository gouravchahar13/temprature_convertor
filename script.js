// getting elements

const input=document.getElementById("input");
const btn=document.getElementById("btn");
const res=document.getElementById("res");

//functions
function celtofar(value){
    const converted=(value*9)/5 +32;
    return converted;
}

// add ing event  listners

btn.addEventListener("click",(e)=>{
    let value=parseInt(input.value);
    if (value==null){
        alert("value cannot be empty")
    }
    else{
        let result=celtofar(value);
        res.innerHTML=result;
    }
})