// declaration des variable
var aString
var bString
var a
var b
var operation
var resultat
// click sur nombre
function onclickSurnombre(number) {
    if (aString == undefined) {
        aString = number
    }
    else{
        bString = number
    }
    afficheur()
    
}
// afficher
function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ''
    if (a != undefined && b != undefined && operation != undefined  ) {
        afficheur.value = number
        
    }
    else{
        if (aString != undefined) {
            afficheur.value += aString
         }
        if (operation != undefined) {
            afficheur.value += operation
         }
        if (bString != undefined) {
            afficheur.value += bString
         }
    }
    
}
// operation
function operaTion(operationparam) {
    if (operation == undefined) {
        operation = operationparam
    }
    afficheur()
}
// egale
function Egale() {
    a = parseFloat(aString)
    b = parseFloat (bString)
    resultat = calculer(a , b , operation)
    afficheur(resultat)
}
// calculer
function calculer(a,b,operation) {
    var _resultat = undefined
    switch (operation) {
        case '+':
            _resultat = a + b
            break;
        case '-':
            _resultat = a - b
            break;
        case '*':
            _resultat = a * b
            break;
        case '/':
            _resultat = a / b
            break;
    
        default:
            break;
    }
    return _resultat
}
// suprimmer
 function suprimer() {
     a = undefined;
     b = undefined;
     aString = undefined;
     bString = undefined;
     operation = undefined;
     resultat = undefined;
     var afficheur = document.getElementById("afficheur");
     afficheur.value = ''
 }