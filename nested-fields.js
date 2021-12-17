const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const little = { a: 5 };
const huge = { a: { b: { c: { d: 5 } } } };


suite
    .add('little', function () {
        const value = little.a;
    })
    .add('huge', function () {
        const a = huge.a;
        const b = a.b;
        const c = b.c;
        const d = c.d;
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });