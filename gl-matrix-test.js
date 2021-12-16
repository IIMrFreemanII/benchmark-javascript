const { mat4, vec3 } = require('gl-matrix');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;
let someMatrix = mat4.create();
const translation = vec3.fromValues(1, 1, 1);

suite
    .add('new identity matrix', function () {
        mat4.translate(someMatrix, someMatrix, translation);
        someMatrix = mat4.create();
    })
    .add('set to identity', function () {
        mat4.translate(someMatrix, someMatrix, translation);
        mat4.identity(someMatrix);
    })

    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });