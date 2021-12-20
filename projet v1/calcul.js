// declaration des variable
var a 
var b 
//traitement
function calculer() 
{ 
     a = document.getElementById("output").value 
     b = a
    document.getElementById("output").value = b 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("output").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("output").value = "" 
} 
