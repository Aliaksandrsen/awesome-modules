/* export {} */

import { num } from './script2.js';
console.log(num); //1
setTimeout(() => {
    console.log(num); // 3
}, 5000);




/* export default */

// import num from './script2.js';
// console.log(num); //1
// setTimeout(() => {
//     console.log(num); // 1
// }, 5000);
