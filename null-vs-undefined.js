const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
    .add('null', function () {
        const value = null;
    })
    .add('undefined', function () {
        let value;
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });