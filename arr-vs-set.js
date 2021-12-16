const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const set = new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);

suite
    .add('arr', function () {
        arr.forEach((item) => {
            item += 1;
        });
    })
    .add('set', function () {
        set.forEach((item) => {
            item += 1;
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
