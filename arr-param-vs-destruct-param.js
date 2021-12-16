const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const params = [ 1, 2, 3, 4 ];
const objParams = { a: 1, b: 2, c: 3, d: 4 };

const argsFunc = (a, b, c, d) => {
    return a + b + c + d;
};

const arrFunc = (args) => {
    return args[0] + args[1] + args[2] + args[3];
};

const restFunc = (...args) => {
    return args[0] + args[1] + args[2] + args[3];
};

suite
    .add('arr param', function () {
        const result = arrFunc(params);
    })
    .add('spread param', function () {
        const result = argsFunc(...params);
    })
    .add('rest param', function () {
        const result = restFunc(1, 2, 3, 4);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
