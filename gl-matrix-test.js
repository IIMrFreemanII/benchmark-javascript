const { mat4, vec3, glMatrix, quat } = require('gl-matrix');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;
let someMatrix = mat4.create();
const translation = vec3.fromValues(1, 1, 1);
const rotation = quat.create();
quat.fromEuler(rotation, 30, 45, 23);
const scale = vec3.fromValues(1, 1, 1);

glMatrix.setMatrixArrayType(Float32Array);

// suite
//     .add('rotation', function () {
//         mat4.fromRotationTranslationScale(someMatrix, rotation, translation, scale);
//     })
//     // .add('set to identity', function () {
//     //     mat4.fromRotationTranslationScale(someMatrix, someMatrix, translation);
//     // })
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({ 'async': true });

const matrixData = new Float32Array(5 * 16);
const mat1 = new Float32Array(matrixData.buffer, 0 * 16 * 4, 16);

mat1.forEach((_, i, arr) => {
    arr[i] = 3;
});

console.log('matrixData', matrixData);
console.log('mat1', mat1);