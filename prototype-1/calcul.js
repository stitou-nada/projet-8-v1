// declaration des variable
var aString
var bString
var operation
var a
var b
var total

function ClickSurnombre(number) {




    if (aString == undefined) {
        aString = number
    } else {
        bString = number
    }

    afficheur()
}

function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ''

    if (a != undefined && b != undefined && operation != undefined) {
        afficheur.value = number
    } else {
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


function Operation(operationParm) {
    if (operation == undefined) {
        operation = operationParm
    }

    afficheur()
}

function Egale() {
    a = parseFloat(aString);
    b = parseFloat(bString);

    total = calculate(a, b, operation)

    afficheur(total)

}

function calculate(aPara, bPara, operationPara) {
    var _total = undefined

    switch (operationPara) {
        case "+":
            _total = aPara + bPara
            break;


        default:
            break;
    }

    return _total
}