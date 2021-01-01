module.exports = function toReadable(number) {
    if (number === 0) {return "zero";}
    number = number.toString();
    let unit, ten, teen, hundred, newNumber;
    if (number.length === 1) {unit = number;}
    if (number.length === 2) {
        if (number[0] === "1") {teen = number[1];}
        else if (number[1] === "0") {ten = number[0];}
        unit = number[1];
        ten = number[0];
    }
    if (number.length === 3) {
        if (number[1] === "0" && number[2] === "0") {hundred = number[0];}
        else if (number[1] === "1") {
            hundred = number[0];
            teen = number[2];
        }
        else if (number[1] !== "0" && number[2] === "0") {
            hundred = number[0];
            ten = number[1];
        }
        else if (number[1] === "0" && number[2] !== "0") {
            hundred = number[0];
            unit = number[2];
        }
        hundred = number[0];
        ten = number[1];
        unit = number[2];
    }
    switch (teen) {
        case "0": teen = "ten"; break;
        case "1": teen = "eleven"; break;
        case "2": teen = "twelve"; break;
        case "3": teen = "thirteen"; break;
        case "4": teen = "fourteen"; break; 
        case "5": teen = "fifteen"; break;
        case "6": teen = "sixteen"; break;
        case "7": teen = "seventeen"; break;
        case "8": teen = "eighteen"; break;
        case "9": teen = "nineteen"; break;
    }
    switch (ten) {
        case "2": ten = "twenty"; break;
        case "3": ten = "thirty"; break;
        case "4": ten = "forty"; break;
        case "5": ten = "fifty"; break;
        case "6": ten = "sixty"; break;
        case "7": ten = "seventy"; break;
        case "8": ten = "eighty"; break;
        case "9": ten = "ninety"; break;
    }
    function renameUnits(x) {
        switch (x) {
            case "1": x = "one"; break;
            case "2": x = "two"; break;
             case "3": x = "three"; break;
             case "4": x = "four"; break;
            case "5": x = "five"; break;
            case "6": x = "six"; break;
            case "7": x = "seven"; break;
            case "8": x = "eight"; break;
            case "9": x = "nine"; break;
        }
        return (newNumber = x);
    }
    if (number.length === 1) {return renameUnits(unit);}
    if (number.length === 2) {
        if (number[0] === "1") {return teen;}
        else if (number[1] === "0") {return ten;}
        return `${ten} ${renameUnits(unit)}`;
    }
    if (number.length === 3) {
        if (number[1] === "0" && number[2] === "0") {return `${renameUnits(hundred)} hundred`;}
        else if (number[1] === "1") {return `${renameUnits(hundred)} hundred ${teen}`;}
        else if (number[1] !== "0" && number[2] === "0") {return `${renameUnits(hundred)} hundred ${ten}`;}
        else if (number[1] === "0" && number[2] !== "0") {return `${renameUnits(hundred)} hundred ${renameUnits(unit)}`;}
        return `${renameUnits(hundred)} hundred ${ten} ${renameUnits(unit)}`;
    }
};
