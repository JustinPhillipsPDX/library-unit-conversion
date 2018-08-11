// united states customary units of length
// international
const lengthPoint = 1; // p
const lengthPica = 12; // P/
const lengthInch = 72; // in 0.0138889
const lengthFoot = 864; // ft
const lengthYard = 2592; // yd
const lengthMile = 4561920; // mi
// us survey
const lengthLink = 570.24; // li
const lengthRod = 14256; // rd
const lengthChain = 57024; // ch
const lengthFurlongUs = 570240; // fur
const lengthStatuteMile = 4561920; // mi
const lengthLeague = 13685760; // lea
// international nautical
const lengthFathom = 5184; // ftm
const lengthCable = 622080; // cb
const lengthNauticalMile = 5249733.12; // NM or nmi

// metric units of length
const lengthMillimeter = 2.83465; // mm
const lengthCentimeter = 28.3465; // cm
const lengthDecimeter = 283.465; // dm
const lengthMeter = 2834.65; // m
const lengthDekameter = 28346.5; // dam
const lengthHectometer = 283465; // hm
const lengthKilometer = 2834650; // km

//
function convert(value,fromUnit,toUnit) {
    return (value * fromUnit / toUnit);//.toFixed(10);
}

//console.log("Convert 1 Foot to Millimeters: " + convert(1, lengthFoot, lengthMillimeter)); // 304.7995343340448
//console.log("Convert 1 Millimeter to Feet: " + convert(1, lengthMillimeter, lengthFoot)); // 0.0032808449074074072
