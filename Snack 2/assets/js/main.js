/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

const users = [
    'pippo',
    'PLUTO',
    'Paperino',
    'TOPOLINO'
];

const userFirstCap = [];
users.forEach(user => {
    const firstLetter = user.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const otherLetters = user.slice(1).toLocaleLowerCase()
    const unitedWord = firstLetterCap + otherLetters
    userFirstCap.push(unitedWord)
})
console.log(userFirstCap);

/* Commento post correzione:
const userFirstCap = users.map(user => {
    const firstLetterCap = user.charAt(0).toLocaleUpperCase()
    const otherLetters = user.slice(1).toLocaleLowerCase()
    const unitedWord = firstLetterCap + otherLetters
    return unitedWord
})

console.log(userFirstCap); */