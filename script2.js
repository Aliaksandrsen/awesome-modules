/* export {} */

console.log('export {}');
let num = 1;
console.log(num); //1
setTimeout(() => {
    num = 3;
    console.log(num); //3
}, 3000);
export { num };




/* export default */

// console.log('export default');
// let num = 1;
// console.log(num); //1
// setTimeout(() => {
//     num = 3;
//     console.log(num); //3
// }, 3000);
// export default num;