const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    let doubleLetterArr = expr.match(/.{1,2}/g);
    let arr = [];
    doubleLetterArr.forEach(function(elem) {
        if ( elem == "00") {
            arr.push("f")
        } else if (elem == "10") {
            arr.push(".");
        } else if (elem == "11") {
            arr.push("-");
        } else if (elem == "**") {
            arr.push(" "); 
        }
    });
    let morseString = arr.join("");
    let fiveLetterArr = morseString.match(/.{1,5}/g);
    let result = "";

    let morseArr = fiveLetterArr.map(function(item) {
        return item.replace(/f/g,'').trim();
    })

    morseArr.forEach(function(item) {
        if (item.length == 0) {
            result += " ";
        }
        for (let key of Object.keys(MORSE_TABLE)) {
            if (item == key) {
                result += MORSE_TABLE[key];
            }              
        }
    });
    return result;
}

module.exports = {
    decode
}