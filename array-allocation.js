const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
    .add('array length 1', function () {
        const arr = new Array(1);
    })
    .add('array length 10', function () {
        const arr = new Array(10);
    })
    .add('array length 100', function () {
        const arr = new Array(100);
    })
    .add('array length 1000', function () {
        const arr = new Array(1000);
    })
    .add('array length 10000', function () {
        const arr = new Array(10000);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });