const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
    .add('number alloc', function () {
        const value = 5;
    })
    .add('object alloc', function () {
        const value = { a: 5, b: 5, c: 5 };
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });