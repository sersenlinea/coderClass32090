const moment = require('moment')

const hoy = moment()
const nacimiento= moment("05/12/1972","DD/MM/YYYY")

const difYear = hoy.diff(nacimiento, 'years')
const difDays = hoy.diff(nacimiento, 'days')
console.log('este es mi cambio');

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`);
console.log(`Nací el ${nacimiento.format("DD/MM/YYYY")}`);
console.log(`Desde mi nacimiento han pasado ${difYear} años y ${difDays} de días`);
