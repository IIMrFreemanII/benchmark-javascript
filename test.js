const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

// const arr = [ 1, 2, 3, 4, 5 ];
// add tests
// suite
//     .add('foreach', function () {
//         arr.forEach((item) => {
//             const result = item + 1;
//         });
//     })
//     .add('for', function () {
//         for (let i = 0; i < arr.length; i++) {
//             const result = arr[i] + 1;
//         }
//     })
//
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

// const arr = [ 1, 2, 3, 4, 5 ];
// suite
//     .add('arr destruct', function () {
//         const [a, b, s, d, e] = arr;
//     })
//     .add('arr new variables', function () {
//         const a = arr[0];
//         const b = arr[1];
//         const c = arr[2];
//         const d = arr[3];
//         const e = arr[4];
//     })
//
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
// };
// suite
//     .add('obj destruct', function () {
//         const { a, b, c, d, e } = obj;
//         const sum = a + b + c + d + e;
//     })
//     .add('obj new variables', function () {
//         const a = obj.a;
//         const b = obj.b;
//         const c = obj.c;
//         const d = obj.d;
//         const e = obj.e;
//         const sum = a + b + c + d + e;
//     })
//
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
// };
// const arr = [ 1, 2, 3, 4, 5 ];
// suite
//     .add('obj access', function () {
//         const sum = obj.a + obj.b + obj.c + obj.d + obj.e;
//     })
//     .add('arr access', function () {
//         const sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
//     })
//
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

// const arr = [
//     [ 1, 2, 3, 4, 5 ],
//     [ 1, 2, 3, 4, 5 ],
//     [ 1, 2, 3, 4, 5 ],
// ];
// suite
//     .add('foreach destruct', function () {
//         arr.forEach(([ a, b, c, d, e ]) => {
//             const sum = a + b + c + d + e;
//         });
//     })
//     .add('foreach assign', function () {
//         arr.forEach((arr) => {
//             const a = arr[0];
//             const b = arr[1];
//             const c = arr[2];
//             const d = arr[3];
//             const e = arr[4];
//             const sum = a + b + c + d + e;
//         });
//     })
//
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

suite
    .add('class Vec3', function () {
        const vec3 = new Vector3();
    })
    .add('plain Vec3', function () {
        const vec3 = { x: 0, y: 0, z: 0 };
    })

    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });