//stores the current temp in kelvin
const kelvin = 270;

//converts kelvin to celsius
const celsius = kelvin - 273;

//converts to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newtons.`)

//converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrrenheit.`);
