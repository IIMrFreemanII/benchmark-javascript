const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const someFunc = () => {
    const value = 5;
    console.log(value);
};

suite
    .add('func.toString()', function () {
        const str = someFunc.toString();
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });