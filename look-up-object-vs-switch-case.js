const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, w: 10 };
const mapFunc = (name) => {
    switch (name) {
        case "a":
            return 1;
        case "b":
            return 2;
        case "c":
            return 3;
        case "d":
            return 4;
        case "e":
            return 5;
        case "f":
            return 6;
        case "g":
            return 7;
        case "h":
            return 8;
        case "i":
            return 9;
        case "w":
            return 10;
    }
}

suite
    .add('object look up', function () {
        const value = obj.w;
    })
    .add('map func', function () {
        const value = mapFunc("w");
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
