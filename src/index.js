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
     let counter = 0;
    let arr = [];
    let str = '';
   

    for (let char of expr) {
        str += char;
        counter++;
        if (counter === 10) {
            arr.push(str)
            str = '';
            counter = 0;
        }
    }

    return arr.map(item => {
        let finalLetter = '';
        if (item === '**********') {
            finalLetter = ' ';
            return finalLetter;
        }
        for (let i = 0; i <= item.length; i = i + 2) {
            if (item[i] === '1' && item[i + 1] === '1') finalLetter += '-';
            if (item[i] === '1' && item[i + 1] === '0') finalLetter += '.';
        }
        return finalLetter;
    }).map(finalLetter => {
        if (finalLetter === ' ') return ' ';
        if (finalLetter in MORSE_TABLE) {
            return MORSE_TABLE[finalLetter]
        }
    }).join('');

}

module.exports = {
    decode
}