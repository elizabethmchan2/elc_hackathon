//$(document).ready(function () {
//
//    $("#classpresidentsstuff").hide();
//    $("#electionstuff").hide();
//    $("#membersstuff").hide();
//    $("#dormpresidentsstuff").hide();
//
//    $("#classpresidents").click(function () {
//        $("#classpresidentsstuff").toggle();
//    });
//
//    $("#election").click(function () {
//        $("#electionstuff").toggle();
//    });
//    $("#members").click(function () {
//        $("#membersstuff").toggle();
//    });
//    $("#dormpresidents").click(function () {
//        $("#dormpresidentsstuff").toggle();
//    });
//});


// for (var i = 0; i < toggleCircles.length; i++) {
//     $('.toggleCircles').click(function () {
//         $('#navCol').slideToggle(400);
//         $('#main').toggleClass('mainLarge');
//         $('body').toggleClass('backgroundOffset');
//         return false;
//     });
// }

// var toggleItems = document.getElementsByClassName("toggle-items")

var eyeBrown = document.getElementById("Brown")
var eyeHazel= document.getElementById("Hazel")
var eyeAmber = document.getElementById("Amber")
var eyeBlue = document.getElementById("Blue")
var eyeGreen = document.getElementById("Green")
var eyeGrey = document.getElementById("Grey")


var eyeBrownreset = 0;
eyeBrown.addEventListener('click', function () {
    if (eyeBrownreset == 0) { //not yet clicked
        eyeBrown.style.outline = "1px dotted black";
        eyeBrownreset = 1;

    } else {
        eyeBrown.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeBrownreset = 0;
    }
});

var eyeHazelReset = 0;
eyeHazel.addEventListener('click', function () {
    if (eyeHazelReset == 0) { //not yet clicked
        eyeHazel.style.outline = "1px dotted black";
        eyeHazelReset = 1;

    } else {
        eyeHazel.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeHazelReset = 0;
    }
});

var eyeAmberReset = 0;
eyeAmber.addEventListener('click', function () {
    if (eyeAmberReset == 0) { //not yet clicked
        eyeAmber.style.outline = "1px dotted black";
        eyeAmberReset = 1;

    } else {
        eyeAmber.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeAmberReset = 0;
    }
});

var eyeBlueReset = 0;
eyeBlue.addEventListener('click', function () {
    if (eyeBlueReset == 0) { //not yet clicked
        eyeBlue.style.outline = "1px dotted black";
        eyeBlueReset = 1;

    } else {
        eyeBlue.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeBlueReset = 0;
    }
});

var eyeGreenReset = 0;
eyeGreen.addEventListener('click', function () {
    if (eyeGreenReset == 0) { //not yet clicked
        eyeGreen.style.outline = "1px dotted black";
        eyeGreenReset = 1;

    } else {
        eyeGreen.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeGreenReset = 0;
    }
});

var eyeGreyReset = 0;
eyeGrey.addEventListener('click', function () {
    if (eyeGreyReset == 0) { //not yet clicked
        eyeGrey.style.outline = "1px dotted black";
        eyeGreyReset = 1;

    } else {
        eyeGrey.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eyeGreyReset = 0;
    }
});


var curly = document.getElementById("curly")
var wavy = document.getElementById("wavy")
var straight = document.getElementById("straight")

var curlyReset = 0;
curly.addEventListener('click', function () {
    if (curlyReset == 0) { //not yet clicked
        curly.style.outline = "1px dotted black";
        curlyReset = 1;

    } else {
        curly.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        curlyReset = 0;
    }
});

var wavyReset = 0;
wavy.addEventListener('click', function () {
    if (wavyReset == 0) { //not yet clicked
        wavy.style.outline = "1px dotted black";
        wavyReset = 1;

    } else {
        wavy.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        wavyReset = 0;
    }
});

var straightReset = 0;
straight.addEventListener('click', function () {
    if (straightReset == 0) { //not yet clicked
        straight.style.outline = "1px dotted black";
        straightReset = 1;

    } else {
        straight.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        straightReset = 0;
    }
});


var hairBrown = document.getElementById("Black")
var hairDBrown = document.getElementById("Dark Brown")
var hairLBrown = document.getElementById("Light Brown")
var hairSBlonde = document.getElementById("Sandy Blonde")
var hairBlonde = document.getElementById("Blonde")
var hairRed = document.getElementById("Red")
var hairGrey = document.getElementById("Grey")
var hairWhite = document.getElementById("White")

var hairBrownReset = 0;
hairBrown.addEventListener('click', function () {
    if (hairBrownReset == 0) { //not yet clicked
        hairBrown.style.outline = "1px dotted black";
        hairBrownReset = 1;

    } else {
        hairBrown.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairBrownReset = 0;
    }
});

var hairDBrownReset = 0;
hairDBrown.addEventListener('click', function () {
    if (hairDBrownReset == 0) { //not yet clicked
        hairDBrown.style.outline = "1px dotted black";
        hairDBrownReset = 1;

    } else {
        hairDBrown.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairDBrownReset = 0;
    }
});

var hairLBrownReset = 0;
hairLBrown.addEventListener('click', function () {
    if (hairLBrownReset == 0) { //not yet clicked
        hairLBrown.style.outline = "1px dotted black";
        hairLBrownReset = 1;

    } else {
        hairLBrown.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairLBrownReset = 0;
    }
});

var hairSBlondeReset = 0;
hairSBlonde.addEventListener('click', function () {
    if (hairSBlondeReset == 0) { //not yet clicked
        hairSBlonde.style.outline = "1px dotted black";
        hairSBlondeReset = 1;

    } else {
        hairSBlonde.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairSBlondeReset = 0;
    }
});

var hairBlondeReset = 0;
hairBlonde.addEventListener('click', function () {
    if (hairBlondeReset == 0) { //not yet clicked
        hairBlonde.style.outline = "1px dotted black";
        hairBlondeReset = 1;

    } else {
        hairBlonde.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairBlondeReset = 0;
    }
});

var hairRedReset = 0;
hairRed.addEventListener('click', function () {
    if (hairRedReset == 0) { //not yet clicked
        hairRed.style.outline = "1px dotted black";
        hairRedReset = 1;

    } else {
        hairRed.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairRedReset = 0;
    }
});

var hairGreyReset = 0;
hairGrey.addEventListener('click', function () {
    if (hairGreyReset == 0) { //not yet clicked
        hairGrey.style.outline = "1px dotted black";
        hairGreyReset = 1;

    } else {
        hairGrey.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairGreyReset = 0;
    }
});

var hairWhiteReset = 0;
hairWhite.addEventListener('click', function () {
    if (hairWhiteReset == 0) { //not yet clicked
        hairWhite.style.outline = "1px dotted black";
        hairWhiteReset = 1;

    } else {
        hairWhite.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hairWhiteReset = 0;
    }
});

var Frizziness = document.getElementById("Frizziness")
var Volume = document.getElementById("Volume")
var Greasy = document.getElementById("Greasy")
var Dry = document.getElementById("Dry Scalp")
var Brittle = document.getElementById("Brittle Hair")
var Dyed = document.getElementById("Dyed")

var FrizzinessReset = 0;
Frizziness.addEventListener('click', function () {
    if (FrizzinessReset == 0) { //not yet clicked
        Frizziness.style.outline = "1px dotted black";
        FrizzinessReset = 1;

    } else {
        Frizziness.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        FrizzinessReset = 0;
    }
});


var VolumeReset = 0;
Volume.addEventListener('click', function () {
    if (VolumeReset == 0) { //not yet clicked
        Volume.style.outline = "1px dotted black";
        VolumeReset = 1;

    } else {
        Volume.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        VolumeReset = 0;
    }
});


var GreasyReset = 0;
Greasy.addEventListener('click', function () {
    if (GreasyReset == 0) { //not yet clicked
        Greasy.style.outline = "1px dotted black";
        GreasyReset = 1;

    } else {
        Greasy.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        GreasyReset = 0;
    }
});


var DryReset = 0;
Dry.addEventListener('click', function () {
    if (DryReset == 0) { //not yet clicked
        Dry.style.outline = "1px dotted black";
        DryReset = 1;

    } else {
        Dry.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        DryReset = 0;
    }
});


var BrittleReset = 0;
Brittle.addEventListener('click', function () {
    if (BrittleReset == 0) { //not yet clicked
        Brittle.style.outline = "1px dotted black";
        BrittleReset = 1;

    } else {
        Brittle.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        BrittleReset = 0;
    }
});


var DyedReset = 0;
Dyed.addEventListener('click', function () {
    if (DyedReset == 0) { //not yet clicked
        Dyed.style.outline = "1px dotted black";
        DyedReset = 1;

    } else {
        Dyed.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        DyedReset = 0;
    }
});

var skinOily = document.getElementById("Oily")
var skinDry = document.getElementById("Dry")
var skinCombination = document.getElementById("Combination")
var skinNormal = document.getElementById("Normal")


var skinOilyReset = 0;
skinOily.addEventListener('click', function () {
    if (skinOilyReset == 0) { //not yet clicked
        skinOily.style.outline = "1px dotted black";
        skinOilyReset = 1;

    } else {
        skinOily.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        skinOilyReset = 0;
    }
});

var skinDryReset = 0;
skinDry.addEventListener('click', function () {
    if (skinDryReset == 0) { //not yet clicked
        skinDry.style.outline = "1px dotted black";
        skinDryReset = 1;

    } else {
        skinDry.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        skinDryReset = 0;
    }
});

var skinCombinationReset = 0;
skinCombination.addEventListener('click', function () {
    if (skinCombinationReset == 0) { //not yet clicked
        skinCombination.style.outline = "1px dotted black";
        skinCombinationReset = 1;

    } else {
        skinCombination.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        skinCombinationReset = 0;
    }
});

var skinNormalReset = 0;
skinNormal.addEventListener('click', function () {
    if (skinNormalReset == 0) { //not yet clicked
        skinNormal.style.outline = "1px dotted black";
        skinNormalReset = 1;

    } else {
        skinNormal.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        skinNormalReset = 0;
    }
});

var acne = document.getElementById("Acne")
var dullness = document.getElementById("Dullness")
var darkSpots = document.getElementById("Dark Spots")
var dryness = document.getElementById("Dryness")
var hyper = document.getElementById("Hyper")
var wrinkles = document.getElementById("Wrinkles")
var excessOil = document.getElementById("Excess Oil")



var acneReset = 0;
acne.addEventListener('click', function () {
    if (acneReset == 0) { //not yet clicked
        acne.style.outline = "1px dotted black";
        acneReset = 1;

    } else {
        acne.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        acneReset = 0;
    }
});

var dullnessReset = 0;
dullness.addEventListener('click', function () {
    if (dullnessReset == 0) { //not yet clicked
        dullness.style.outline = "1px dotted black";
        dullnessReset = 1;

    } else {
        dullness.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        dullnessReset = 0;
    }
});

var darkSpotsReset = 0;
darkSpots.addEventListener('click', function () {
    if (darkSpotsReset == 0) { //not yet clicked
        darkSpots.style.outline = "1px dotted black";
        darkSpotsReset = 1;

    } else {
        darkSpots.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        darkSpotsReset = 0;
    }
});

var drynessReset = 0;
dryness.addEventListener('click', function () {
    if (drynessReset == 0) { //not yet clicked
        dryness.style.outline = "1px dotted black";
        drynessReset = 1;

    } else {
        dryness.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        drynessReset = 0;
    }
});

var hyperReset = 0;
hyper.addEventListener('click', function () {
    if (hyperReset == 0) { //not yet clicked
        hyper.style.outline = "1px dotted black";
        hyperReset = 1;

    } else {
        hyper.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        hyperReset = 0;
    }
});

var wrinklesReset = 0;
wrinkles.addEventListener('click', function () {
    if (wrinklesReset == 0) { //not yet clicked
        wrinkles.style.outline = "1px dotted black";
        wrinklesReset = 1;

    } else {
        wrinkles.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        wrinklesReset = 0;
    }
});

var excessOilReset = 0;
excessOil.addEventListener('click', function () {
    if (excessOilReset == 0) { //not yet clicked
        excessOil.style.outline = "1px dotted black";
        excessOilReset = 1;

    } else {
        excessOil.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        excessOilReset = 0;
    }
});

var very = document.getElementById("very")
var somewhat = document.getElementById("somewhat")
var rookie = document.getElementById("rookie")

var veryReset = 0;
very.addEventListener('click', function () {
    if (veryReset == 0) { //not yet clicked
        very.style.outline = "1px dotted black";
        veryReset = 1;

    } else {
        very.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        veryReset = 0;
    }
});


var somewhatReset = 0;
somewhat.addEventListener('click', function () {
    if (somewhatReset == 0) { //not yet clicked
        somewhat.style.outline = "1px dotted black";
        somewhatReset = 1;

    } else {
        somewhat.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        somewhatReset = 0;
    }
});


var rookieReset = 0;
rookie.addEventListener('click', function () {
    if (rookieReset == 0) { //not yet clicked
        rookie.style.outline = "1px dotted black";
        rookieReset = 1;

    } else {
        rookie.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        rookieReset = 0;
    }
});

var Mvery = document.getElementById("Mvery")
var Msomewhat = document.getElementById("Msomewhat")
var Mrookie = document.getElementById("Mrookie")

var MveryReset = 0;
Mvery.addEventListener('click', function () {
    if (MveryReset == 0) { //not yet clicked
        Mvery.style.outline = "1px dotted black";
        MveryReset = 1;

    } else {
        Mvery.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        MveryReset = 0;
    }
});


var MsomewhatReset = 0;
Msomewhat.addEventListener('click', function () {
    if (MsomewhatReset == 0) { //not yet clicked
        Msomewhat.style.outline = "1px dotted black";
        MsomewhatReset = 1;

    } else {
        Msomewhat.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        MsomewhatReset = 0;
    }
});


var MrookieReset = 0;
Mrookie.addEventListener('click', function () {
    if (MrookieReset == 0) { //not yet clicked
        Mrookie.style.outline = "1px dotted black";
        MrookieReset = 1;

    } else {
        Mrookie.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        MrookieReset = 0;
    }
});


var eLauder = document.getElementById("Estée Lauder")
var laM = document.getElementById("La Mersrc")
var clin = document.getElementById("Clinique")
var bBrown = document.getElementById("Bobbi Brown")
var sBox = document.getElementById("Smash Box")
var bumble = document.getElementById("Bumble")
var aveda = document.getElementById("Aveda")
var glamgow = document.getElementById("Glamgow")
var mac = document.getElementById("Mac")
var aevin = document.getElementById("Aevin")
var becca = document.getElementById("Becca")

var eLauderReset = 0;
eLauder.addEventListener('click', function () {
    if (eLauderReset == 0) { //not yet clicked
        eLauder.style.outline = "1px dotted black";
        eLauderReset = 1;

    } else {
        eLauder.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        eLauderReset = 0;
    }
});

var laMReset = 0;
laM.addEventListener('click', function () {
    if (laMReset == 0) { //not yet clicked
        laM.style.outline = "1px dotted black";
        laMReset = 1;

    } else {
        laM.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        laMReset = 0;
    }
});

var clinReset = 0;
clin.addEventListener('click', function () {
    if (clinReset == 0) { //not yet clicked
        clin.style.outline = "1px dotted black";
        clinReset = 1;

    } else {
        clin.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        clinReset = 0;
    }
});


var bBrownReset = 0;
bBrown.addEventListener('click', function () {
    if (bBrownReset == 0) { //not yet clicked
        bBrown.style.outline = "1px dotted black";
        bBrownReset = 1;

    } else {
        bBrown.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        bBrownReset = 0;
    }
});

var sBoxReset = 0;
sBox.addEventListener('click', function () {
    if (sBoxReset == 0) { //not yet clicked
        sBox.style.outline = "1px dotted black";
        sBoxReset = 1;

    } else {
        sBox.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        sBoxReset = 0;
    }
});

var bumbleReset = 0;
bumble.addEventListener('click', function () {
    if (bumbleReset == 0) { //not yet clicked
        bumble.style.outline = "1px dotted black";
        bumbleReset = 1;

    } else {
        bumble.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        bumbleReset = 0;
    }
});

var avedaReset = 0;
aveda.addEventListener('click', function () {
    if (avedaReset == 0) { //not yet clicked
        aveda.style.outline = "1px dotted black";
        avedaReset = 1;

    } else {
        aveda.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        avedaReset = 0;
    }
});

var glamgowReset = 0;
glamgow.addEventListener('click', function () {
    if (glamgowReset == 0) { //not yet clicked
        glamgow.style.outline = "1px dotted black";
        glamgowReset = 1;

    } else {
        glamgow.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        glamgowReset = 0;
    }
});

var macReset = 0;
mac.addEventListener('click', function () {
    if (macReset == 0) { //not yet clicked
        mac.style.outline = "1px dotted black";
        macReset = 1;

    } else {
        mac.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        macReset = 0;
    }
});

var aevinReset = 0;
aevin.addEventListener('click', function () {
    if (aevinReset == 0) { //not yet clicked
        aevin.style.outline = "1px dotted black";
        aevinReset = 1;

    } else {
        aevin.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        aevinReset = 0;
    }
});

var beccaReset = 0;
becca.addEventListener('click', function () {
    if (beccaReset == 0) { //not yet clicked
        becca.style.outline = "1px dotted black";
        beccaReset = 1;

    } else {
        becca.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        beccaReset = 0;
    }
});

var veryReset = 0;
very.addEventListener('click', function () {
    if (veryReset == 0) { //not yet clicked
        very.style.outline = "1px dotted black";
        veryReset = 1;

    } else {
        very.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        veryReset = 0;
    }
});

var veryReset = 0;
very.addEventListener('click', function () {
    if (veryReset == 0) { //not yet clicked
        very.style.outline = "1px dotted black";
        veryReset = 1;

    } else {
        very.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        veryReset = 0;
    }
});

var veryReset = 0;
very.addEventListener('click', function () {
    if (veryReset == 0) { //not yet clicked
        very.style.outline = "1px dotted black";
        veryReset = 1;

    } else {
        very.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        veryReset = 0;
    }
});


var Prestige = document.getElementById("Prestige")
var Luxe = document.getElementById("Luxe")
var Quarterly = document.getElementById("Quarterly")
var Travel = document.getElementById("Travel")


var PrestigeReset = 0;
Prestige.addEventListener('click', function () {
    if (PrestigeReset == 0) { //not yet clicked
        Prestige.style.outline = "1px dotted black";
        PrestigeReset = 1;

    } else {
        Prestige.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        PrestigeReset = 0;
    }
});

var LuxeReset = 0;
Luxe.addEventListener('click', function () {
    if (LuxeReset == 0) { //not yet clicked
        Luxe.style.outline = "1px dotted black";
        LuxeReset = 1;

    } else {
        Luxe.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        LuxeReset = 0;
    }
});

var QuarterlyReset = 0;
Quarterly.addEventListener('click', function () {
    if (QuarterlyReset == 0) { //not yet clicked
        Quarterly.style.outline = "1px dotted black";
        QuarterlyReset = 1;

    } else {
        Quarterly.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        QuarterlyReset = 0;
    }
});

var TravelReset = 0;
Travel.addEventListener('click', function () {
    if (TravelReset == 0) { //not yet clicked
        Travel.style.outline = "1px dotted black";
        TravelReset = 1;

    } else {
        Travel.style.outline = "none";
        // document.getElementsByClassName("down")[0].style.transform = "rotate(45deg)";
        TravelReset = 0;
    }
});