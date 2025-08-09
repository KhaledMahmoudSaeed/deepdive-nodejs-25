'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
let string1="aeiou";
let string2="bcdfg";
let string3="hjklm";
if(string1.includes(s[0])){
    letter="A"
}else if(string2.includes(s[0])){
    letter="B"
}else if(string3.includes(s[0])){
    letter="C"
}else {
    letter="D"
}
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}