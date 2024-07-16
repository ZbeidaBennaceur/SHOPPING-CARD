
var plus=Array.from(document.getElementsByClassName("plus"))
var nombre=Array.from(document.getElementsByClassName("nombre"))
var moins=Array.from(document.getElementsByClassName("moins"))
var poub=Array.from(document.getElementsByClassName("fa-trash"))
var coeur=Array.from(document.getElementsByClassName("fa-heart"))
var prix=Array.from(document.getElementsByClassName("prix"))
var tot=document.getElementById("total")

for (let i=0; i<plus.length; i++) {
    plus[i].addEventListener("click",function () 
    {nombre[i].innerHTML++
        totalprice()
    })
 }
    
for (let i=0; i<moins.length;i++) {
    moins[i].addEventListener("click",function() {

if (nombre[i].innerHTML>0) {nombre[i].innerHTML-- 
    totalprice()
} 
else if (nombre[i].innerHTML=0) {return nombre[i].innerHTML
    totalprice()
}}
)
}
for (let i=0; i<poub.length;i++) {
    poub[i].addEventListener("click",function() {
        var parent = poub[i].parentNode;
        nombre[i].innerHTML=0
parent.remove()
totalprice()
    }
        )
        }
for (let i=0; i<coeur.length; i++) {
    coeur[i].addEventListener("click",function() {
if (coeur[i].style.color === "black") {coeur[i].style.color = "red"}
else (coeur[i].style.color="black")
    }
)
}
function totalprice () {
    
    var somme =0;
    for (let i=0; i<nombre.length;i++) 
         {
    somme += nombre[i].innerHTML*prix[i].innerHTML
    }
    return document.getElementById("total").innerHTML=somme+"TND"
    }

