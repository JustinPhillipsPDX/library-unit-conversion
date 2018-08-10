//united states customary units of length
// international
const lengthPoint = 1; // p
const lengthPica = 12; // P/
const lengthInch = 72; // in
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

// 
function convert(value,fromUnit,toUnit) {
    return (value * fromUnit / toUnit);//.toFixed(10);
}

console.log(convert(1, lengthChain, lengthFurlongUs)); // 0.1