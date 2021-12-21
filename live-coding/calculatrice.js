// declaration des varibale
var a
var b
var aString
var bString
var operation
var resultat

// click sur nombre

function clickSurnombre(number) {
   if(aString == undefined){
       aString = number
   }
   else{
       bString = number
   }
   afficheur ()
    
}
// afficher

function afficheur(number) {
   var afficheur = document.getElementById("afficheur");
   afficheur.value = ''
   if(a != undefined && b != undefined && operation != undefined){
    afficheur.value = number
    }
    else{
    if(aString!= undefined){
        afficheur.value +=  aString
    }
    if(operation != undefined){
        afficheur.value += operation
    }
    if(bString!= undefined){
        afficheur.value +=  bString
    }
  } 
}
// operation

function operaTion(operationParm) {
    if (operation == undefined){
        operation = operationParm
    }
    afficheur()
}
// egale
 function Egale() {
     a = parseFloat(aString);
     b = parseFloat(bString);
   resultat = calculate(a,b,operation)

   afficheur(resultat)
 }
//  calculate
function calculate(aPara, bPara, operationPara) {
    var _resultat = undefined
    switch (operation) {
        case '+':
            _resultat = aPara + bPara
            break;
        case '-':
            _resultat = aPara - bPara
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
    bString =undefined;
    operation =undefined;
    resultat =undefined;
    var afficheur = document.getElementById("afficheur");
    afficheur.value= '';
}