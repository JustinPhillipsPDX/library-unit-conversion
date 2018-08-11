// unit of length
const point = 1; // p or pt
const pixel = 0.75; // px
const pica = 12; // P/
const inch = 72; // in
const foot = 864; // ft
const yard = 2592; // yd
const mile = 4561920; // mi
const link = 570.24; // li
const rod = 14256; // rd
const chain = 57024; // ch
const furlongUs = 570240; // fur
const statuteMile = 4561920; // mi
const league = 13685760; // lea
const fathom = 5184; // ftm
const cable = 622080; // cb
const nauticalMile = 5249733.12; // NM or nmi
const nanometer = 2.8346e-6; // nm
const millimeter = 2.83465; // mm
const centimeter = 28.3465; // cm
const decimeter = 283.465; // dm
const meter = 2834.65; // m
const dekameter = 28346.5; // dam
const hectometer = 283465; // hm
const kilometer = 2834650; // km
const gigameter = 2.8346457e+12; // Gm
const earthRadius = 18060641280; // RE
const lunarDistance = 1089641963520; // LD
const astronomicalUnit = 4.2405696e+14; // AU
const lightYear = 7.76018152e-7; // ly
const parsec = 8.7468026e+19; // pc
const hubbleLength = 3.700858975415859e+29; // c/H₀

// unit of mass


// unit of time


// unit of electric current


// unit of thermodynamic temperature


// unit of amount of substance


// unit of luminous intensity


// derived units
// area
// volume
// speed, velocity
// acceleration
// wave number
// mass density
// specific volume
// current density
// magnetic field strength
// amount-of-substance concentration
// luminance
// mass fraction

function convert(value,fromUnit,toUnit,commas=true) {

    var str = (value * fromUnit / toUnit).toString();
    var x = str.length;
    var i = str.lastIndexOf(".");

    console.log("strLength: "+ x);
    
    if(commas){

        if (i != -1) {
            fixedLength = x - i;
            str = (value * fromUnit / toUnit).toFixed(fixedLength);
        } else {
            str = (value * fromUnit / toUnit).toFixed(0);
        }

        console.log("index of \".\": " + i);
    }

    return str;

}

//console.log(convert(1,lengthHubbleLength,lengthMile) + " miles"); // 8.112503014993379e+22 miles

console.log(convert(120,dekameter,foot,true)); //

//todo:
/*
    - add commas to convert output
    - finish adding units
*/