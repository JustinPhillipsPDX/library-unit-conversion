var valueOne = "";
var valueTwo = "";
var runningTotal = "";
//var lastDigit = "0";
//var currentDigit = "";

function addValue(number) {
    var newNumber = number;
    if (runningTotal == "0") {
        valueTwo = "";
    }
    //lastDigit = currentDigit;
    
    //console.log("lastDigit: " + lastDigit);

    switch (newNumber) {
        case "0":
            valueTwo += "0";
            runningTotal = valueTwo;
            
            break;
        case "1":
            valueTwo += "1";
            runningTotal = valueTwo;

            break;
        case "2":
            valueTwo += "2";
            runningTotal = valueTwo;

            break;
        case "3":
            valueTwo += "3";
            runningTotal = valueTwo;

            break;
        case "4":
            valueTwo += "4";
            runningTotal = valueTwo;

            break;
        case "5":
            valueTwo += "5";
            runningTotal = valueTwo;

            break;
        case "6":
            valueTwo += "6";
            runningTotal = valueTwo;

            break;
        case "7":
            valueTwo += "7";
            runningTotal = valueTwo;

            break;
        case "8":
            valueTwo += "8";
            runningTotal = valueTwo;

            break;
        case "9":
            valueTwo += "9";
            runningTotal = valueTwo;

            break;
        case "10":

            if ($("#valueTwoNumber").html() == "0") {
                valueTwo += "0.";
            } else {
                valueTwo += ".";
            }
            
            runningTotal = valueTwo;

            break;
        case "11":
            var removeValue = valueTwo.length;
            removeValue = removeValue -1; 
            console.log(removeValue);
            valueTwo = valueTwo.substr(0,removeValue);
            
            if (removeValue < 1) {
                valueTwo = "0";
            }

            runningTotal = valueTwo;
            

            break;
        case "12":
            valueTwo = "0";
            runningTotal = valueTwo;

            break;
        case "13":

            if ($("#valueTwoNumber").html() == "0") {
                valueTwo = "0";
            }

            break;
        case "14":

            if ($("#valueTwoNumber").html() == "0") {
                valueTwo = "0";
            }

            break;
        default:
            break;
    }

    //console.log("currentDigit: " + currentDigit);
    console.log("runningTotal: " + runningTotal);

    $("#valueTwoNumber").html(valueTwo);
}

function copyValue() {

}


$(function () {
    
    //$("#11").css("background-color", "rgb(228, 193, 39)").css("color","rgb(236, 236, 236)");
    //$("#12").css("background-color", "tomato").css("color", "rgb(236, 236, 236)");

    var clickSound = new Audio();
    clickSound.src = "./click.mp3";
    
    $(".clickSound").mousedown(function(){
        //clickSound.load();
        //clickSound.play(); 
       /*
       sound function needs to stop sound when another key is clicked
       */
    });

    $(".keyButton").on("click", function(){

        addValue(this.id);
        

    });

}); //fixed
