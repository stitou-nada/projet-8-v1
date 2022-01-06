// declaration
var aString
var bString
var calculatrice = new Calculatrice()

// traitment
function onclickSurnombre(number) {

    if (calculatrice.a == undefined) {
        if (aString == undefined) {
            aString = ""
        }
        aString += number
    }
    else {
        if (bString == undefined) {
            bString = ""
        }
        bString += number

    }
    afficheur()
}
function afficheur(number) {
    var afficheur = document.getElementById('afficheur');
    afficheur.value = ''
    if (calculatrice.a != undefined && calculatrice.b != undefined && calculatrice.operation != undefined ) {
       afficheur.value = number
    }
    else{
        if (aString != undefined) {
            afficheur.value += aString
        }
        if (calculatrice.operation != undefined) {
            afficheur.value +=calculatrice.operation
        }
        if (bString != undefined) {
            afficheur.value += bString
        }
    }
}
function operaTion(operationParam) {
    if (calculatrice.operation == undefined) {
        calculatrice.operation = operationParam
        calculatrice.a = parseFloat(aString)
    }
    afficheur()
}
function Egale() {
    calculatrice.a = parseFloat(aString);
    calculatrice.b = parseFloat(bString);
    calculatrice.calcule()
    afficheur(calculatrice.calcule())
}

function suprimer() {
    calculatrice.efface()
    aString = undefined;
    bString = undefined;
    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
}