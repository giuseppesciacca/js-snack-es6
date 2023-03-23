/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

/* Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). */
const cars = [
    {
        brand: 'fiat',
        model: 'panda',
        power: 'metano'
    },
    {
        brand: 'lancia',
        model: 'ypsilon',
        power: 'benzina'
    },
    {
        brand: 'fiat',
        model: 'tipo',
        power: 'diesel'
    },
    {
        brand: 'fiat',
        model: '500X',
        power: 'diesel'
    },
    {
        brand: 'tesla',
        model: 'model 3',
        power: 'elettrica'
    },
    {
        brand: 'dacia',
        model: 'spring',
        power: 'elettrica'
    },
    {
        brand: 'tesla',
        model: 'model s',
        power: 'elettrica'
    },
    {
        brand: 'volkswagen',
        model: 'polo',
        power: 'metano'
    },
    {
        brand: 'dacia',
        model: 'sandero stepway',
        power: 'benzina'
    },
    {
        brand: 'dacia',
        model: 'logan',
        power: 'gpl'
    },
]

/* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. */

const benzina = cars.filter(filterForGasoline)
function filterForGasoline(cars) {
    return cars.power == 'benzina'
}
console.log(benzina);

const diesel = cars.filter(filterForDiesel)
function filterForDiesel(cars) {
    return cars.power == 'diesel'
}
console.log(diesel);

const gpl = cars.filter(filterForGpl)
function filterForGpl(cars) {
    return cars.power == 'gpl'
}
console.log(gpl);

const metano = cars.filter(filterForMetano)
function filterForMetano(cars) {
    return cars.power == 'metano'
}
console.log(metano);

const elettrica = cars.filter(filterForElettrica)
function filterForElettrica(cars) {
    return cars.power == 'elettrica'
}
console.log(elettrica);