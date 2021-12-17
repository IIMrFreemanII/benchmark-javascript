const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const string = new Array(200).fill('f');
suite
    .add('spread', function () {
        const arr = [...string]
    })
    .add('array from', function () {
        const arr = Array.from(string);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });