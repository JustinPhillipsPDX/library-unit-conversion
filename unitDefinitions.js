// unit of length
// standard ways of measuring the magnitude of a linear dimension
const unit_length = {
    point:              1, // p or pt
    pixel:              0.75, // px
    pica:               12, 
    inch:               72, // in
    foot:               864, // ft
    yard:               2592, // yd
    mile:               4561920, // mi
    link:               570.24, // li
    rod:                14256, // rd
    chain:              57024, // ch
    furlongUs:          570240, // fur
    statuteMile:        4561920, // mi
    league:             13685760, // lea
    fathom:             5184, // ftm
    cable:              622080, // cb
    nauticalMile:       5249733.12, // NM or nmi
    nanometer:          2.8346e-6, // nm
    millimeter:         2.83465, // mm
    centimeter:         28.3465, // cm
    decimeter:          283.465, // dm
    meter:              2834.65, // m
    dekameter:          28346.5, // dam
    hectometer:         283465, // hm
    kilometer:          2834650, // km
    gigameter:          2.8346457e+12, // Gm
    earthRadius:        18060641280, // RE
    lunarDistance:      1089641963520, // LD
    astronomicalUnit:   4.2405696e+14, // AU
    lightYear:          7.76018152e-7, // ly
    parsec:             8.7468026e+19, // pc
    hubbleLength:       3.700858975415859e+29 // c/H₀
};

// unit of mass
// standard ways of measuring the amount of matter an object contains
const unit_mass = {
    decigram:           0,
    centigram:          0,
    milligram:          0,
    microgram:          0,
    nanogram:           0,
    picogram:           0,
    femtogram:          0,
    attogram:           0,
    zeptogram:          0,
    yoctogram:          0
};

// unit of weight
// standard ways of measuring the pull of gravity on an object
const unit_weight = {

};

// unit of time
// standard ways of measuring or expressing duration
const unit_time = {

};

// unit of electric current
const unit_electric = {

};

// unit of thermodynamic temperature
const unit_temperature = {

};

// unit of amount of substance
const unit_substance = {

};

// unit of luminous intensity
const unit_luminous = {

};

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

    //console.log("strLength: "+ x);
    
    if(commas){
        
        if (i != -1) {

            var fixedLength = x - i;
            str = (value * fromUnit / toUnit).toFixed(fixedLength);
            
            var array = str.split(".");
            array[0] = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            array = array.join(".");

            str = array;

        } else {

            str = (value * fromUnit / toUnit).toFixed(0);
            str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        }

        //console.log("index of \".\": " + i);
    }

    return str;

}

//console.log("1 mi to m = "  + convert(1,unit_length.mile,unit_length.meter)); // 1,609.34154128375621
//console.log("1 mi to ft = " + convert(1,unit_length.mile,unit_length.foot, false)); // 5280

//todo:
/*
    x add commas to convert output
    - finish adding units
*/