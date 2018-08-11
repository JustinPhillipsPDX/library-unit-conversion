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
const lengthNanometer = 2.8346e-6; // nm
const lengthMillimeter = 2.83465; // mm
const lengthCentimeter = 28.3465; // cm
const lengthDecimeter = 283.465; // dm
const lengthMeter = 2834.65; // m
const lengthDekameter = 28346.5; // dam
const lengthHectometer = 283465; // hm
const lengthKilometer = 2834650; // km
const lengthGigameter = 2.8346457e+12; // Gm

// astronomical units of length
const lengthEarthRadius = 18060641280; // RE
const lengthLunarDistance = 1089641963520; // LD
const lengthAstronomicalUnit = 4.2405696e+14; // AU
const lengthLightYear = 7.76018152e-7; // ly
const lengthParsec = 8.7468026e+19; // pc
const lengthHubbleLength = 3.700858975415859e+29; // c/H₀

//
function convert(value,fromUnit,toUnit) {
    return (value * fromUnit / toUnit);//.toFixed(10);
}

//console.log(convert(1, lengthHubbleLength, lengthMile) + " miles"); // 8.112503014993379e+22 miles
