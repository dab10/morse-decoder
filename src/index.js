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
    
    let stackSlice10 = [];

    for (let i = 0; i < expr.length; i = i + 10) {
        stackSlice10.push(expr.slice(i,i+10))
    };

    let stackWithoutZero = [];

    stackWithoutZero = stackSlice10.map(item => (item === '**********') ? item : item.substr(item.indexOf('1')));
    
    stackDotDash = []

    for (let i = 0; i <stackWithoutZero.length; i++) {
        stackDotDash.push(stackWithoutZero[i].replace(/10/g,'.').replace(/11/g,'-'))
    }
    
    stackLetter = []

    for (let i = 0; i < stackDotDash.length; i++) {
        if (stackDotDash[i] === '**********') {
            stackLetter.push(' ')
        } else {
            for (key in MORSE_TABLE) {
                if (stackDotDash[i] === key) {
                    stackLetter.push(MORSE_TABLE[key])
                }
            }
        }
    }

    return stackLetter.join('')
}

module.exports = {
    decode
}