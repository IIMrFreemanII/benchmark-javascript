const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const array = new Array(10).fill(0);
const arrayBuffer = new Float32Array(10);
const random = Math.random();
// console.log(array);
// console.log(arrayBuffer);
// console.log(random);

suite
    .add('array for loop', function () {
        for (let i = 0; i < array.length; i++) {
            array[i] += random;
        }
    })
    .add('array forEach', function () {
        array.forEach((item, index, original) => {
            original[index] += random;
        });
    })
    .add('array buffer for loop', function () {
        for (let i = 0; i < arrayBuffer.length; i++) {
            arrayBuffer[i] += random;
        }
    })
    .add('array buffer forEach', function () {
        arrayBuffer.forEach((item, index, original) => {
            original[index] += random;
        });
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });