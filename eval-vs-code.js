const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
    .add('eval', function () {
        const item = eval(`1 + 1`);
    })
    .add('code', function () {
        const item = 1 + 1;
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
