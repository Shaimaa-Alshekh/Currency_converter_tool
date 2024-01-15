var amount=document.querySelector("input");
var ex=document.querySelector("select");
var res=document.querySelector(".result");
var convertForm=document.querySelector(".convertform");

convertForm.onsubmit=function(e){
    e.preventDefault();

    if(ex.selectedIndex == 0){
        res=( amount.value ) *  .27;

    }else if(ex.selectedIndex == 1){
        res=( amount.value ) * 0.19;

    }else{
        res= amount.value ;
    }


console.log(amount.value);
console.log(ex.selectedIndex);
console.log(res);
document.querySelector(".result").innerHTML=res; 
   

}