const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const obj = { a: 1, b: 2, c: 3 };
const map = new Map(Object.entries(obj));

suite
    .add('object', function () {
        const item = obj.a + obj.b;
    })
    .add('map', function () {
        const item = map.get('a') + map.get('b');
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
