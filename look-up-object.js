const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const littleObject = { a: 1, b: 2, c: 3 }
const hugeObject = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, w: 10 };

suite
    .add('littleObject look up', function () {
        const value = littleObject.a;
    })
    .add('hugeObject look up', function () {
        const value = hugeObject.a;
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
