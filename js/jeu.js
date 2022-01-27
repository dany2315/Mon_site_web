var nombreEssai =0
var blue= 0
var essai =document.getElementById("essai")
var bts =document.querySelectorAll(".case")
var divMessage =document.getElementById("message")
var message =""

bts.forEach(function (x) {
    x.addEventListener("click",function () {
        message=""
        divMessage.innerText=message
        if (nombreEssai<5) {
            nombreEssai++
            essai.innerText=nombreEssai
        }
        
        if (x.id=="case1") {
            if (nombreEssai<5 && blue<3) {
                blue++
                x.style.backgroundColor="blue"
             
            }else{
            message="GAME OVER"
            divMessage.innerText=message
            divMessage.style.color="red"
            divMessage.style.fontWeight="bolder"
            x.style.backgroundColor="orange"

        }
        }
        if (nombreEssai==5 && blue<3) {
           message="GAME OVER"
           divMessage.innerText=message
           divMessage.style.color="red"
           divMessage.style.fontWeight="bolder"
        }

        if (nombreEssai==3 && blue==2) {
                message ="Ils vous reste plus que 2 essai!! Et il vous reste plus que 1 a trouver"
                divMessage.innerText=message
        }else{message=""}

        if (nombreEssai==3 && blue==1) {
            message ="Ils vous reste plus que 2 essai!!"
            divMessage.innerText=message
        }else{message=""}

        

        if (blue==3) {
            message ="you win" 
            divMessage.innerText=message
        }
        
        

       
    })
    
})






