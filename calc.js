document.addEventListener('DOMContentLoaded', (event) => {
let str=""
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
try{
        if(e.target.innerHTML=='='){
             str=eval(str);
                    document.querySelector('.input').value=str;
                        }
            
             else if(e.target.innerHTML=='C'){
            str="";
            document.querySelector('.input').value=str;
 }
        else{
console.log(e.target);
str=str+e.target.innerHTML;
document.querySelector('.input').value=str;
        }

    }
    catch(SyntaxError){
        alert("Invalid format!!!")
        str="";
        document.querySelector('.input').value=str;
    }
    })
})

});
