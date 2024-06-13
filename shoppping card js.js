
var plus = Array.from(document.getElementsByClassName("plus"));
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        plus[i].nextElementSibling.innerHTML++;
        totalprice()
    });
}

var moins = Array.from(document.getElementsByClassName("moins"));
for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener("click", function() {
        if (moins[i].previousElementSibling.innerHTML > 0) {
            moins[i].previousElementSibling.innerHTML--;
            totalprice()
        }
    });
}
var poub = Array.from(document.getElementsByClassName("fa-trash"));
for (let i=0; i<poub.length; i++) {
    poub[i].addEventListener("click", function () {
        poub[i].closest('.imagefamille').remove()
        totalprice()
    })
}

var fav = Array.from(document.getElementsByClassName ("fa-heart"));
for (let i=0; i<fav.length; i++) {
    fav[i].addEventListener("click",function () {
        if (fav[i].style.color==="black") { 
fav[i].setAttribute("style", "color:orange;");}
else {
    fav[i].setAttribute("style", "color:black;");}
    })
}

function totalprice () {
var prix=Array.from(document.getElementsByClassName("prix"));
var nombre = Array.from(document.getElementsByClassName ("nombre"));
var somme =0;
for (let i=0; i<nombre.length;i++) 
     {
somme += nombre[i].innerHTML*prix[i].innerHTML
}
return document.getElementById("total").innerHTML=somme+"TND"
}

