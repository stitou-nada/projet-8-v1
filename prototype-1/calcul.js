// declaration des variable
var aString
var bString
var operation
var a
var b
var resultat

// click sur nombre

function ClickSurnombre(number) {
    if (aString == undefined) {
        aString = number
    } else {
        bString = number
    }

    afficheur()
}
// afficheur

function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ''

    if (a != undefined && b != undefined && operation != undefined) {
        afficheur.value = number
    } else {
        if (aString != undefined) {
            afficheur.value =  afficheur.value + aString
        }
        if (operation != undefined) {
            afficheur.value = afficheur.value + operation
        }
        if (bString != undefined) {
            afficheur.value =  afficheur.value + bString
        }
    }

}

//  operation 
function Operation(operationParm) {
    if (operation == undefined) {
        operation = operationParm
    }

    afficheur()
}

// egale  : 

function Egale() {
    a = parseFloat(aString);
    b = parseFloat(bString);

    resultat = calculate(a, b, operation)

    afficheur(resultat)

}
//  calculer:

function calculate(aPara, bPara, operationPara) {
    var _resultat = undefined

    switch (operationPara) {
        case "+":
            _resultat = aPara + bPara 
            break;
        case '-':
            _resultat = aPara - bPara;
            break;

        default:
            break;
    }

    return _resultat
}

// suprimmer:
function suprimer (){
    aString = undefined; 
    bString =undefined;
    operation =undefined;
    a =undefined;
    b =undefined;
    resultat = undefined;
    var afficheur = document.getElementById('afficheur');
    
    afficheur.value = '';
} 
    
     
