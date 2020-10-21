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
  let result = '';
  const words = expr.split('**********');
  const morses = words.map(word => {
    let char = [];
    for (let i = 0; i < word.length; i += 10) {
      let sym = '';
      for (let j = i; j < i + 10; j += 2) {
        if (word[j] + word[j + 1] === '10') {
          sym += '.';
        } else if (word[j] + word[j + 1] === '11') {
          sym += '-';
        }
      }
      char.push(sym);
    }
    return char;
  });

  const decode = morses.map(word => {
    return word.map(sym => {
      return MORSE_TABLE[sym];
    });
  });

  decode.forEach(word => {
    result = `${result} ${word.join('')}`;
  });

  return result.trim();
}

module.exports = {
    decode
}