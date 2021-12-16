const fs = require('fs');
const path = require('path');

const frag = fs.readFileSync(path.resolve(__dirname, 'shaders', 'default.frag'), { encoding: "utf-8" });
const vert = fs.readFileSync(path.resolve(__dirname, 'shaders', 'default.vert'), { encoding: "utf-8" });

const extractUniformData = (vertSrc, fragSrc) => {
    const vertUniforms = vertSrc.match(/uniform \w+ \w+/g);
    const vertResult = vertUniforms.reduce((acc, item) => {
        const [ _, type, name ] = item.split(' ');
        return { ...acc, [name]: { type, value: null } };
    }, {});

    const fragUniforms = fragSrc.match(/uniform \w+ \w+/g);
    const fragResult = fragUniforms.reduce((acc, item) => {
        const [ _, type, name ] = item.split(' ');
        return { ...acc, [name]: { type, value: null } };
    }, {});

    return { ...vertResult, ...fragResult };
};

const result = extractUniformData(vert, frag);
console.log(result);

// const isPalindrome = (str) => {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//     const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
//
//     const lowRegStr = str.toLowerCase().replace(re, '');
//     // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//     // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//     // var lowRegStr = "amanaplanacanalpanama";
//
//     // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//     const reverseStr = lowRegStr.split('').reverse().join('');
//     // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//     // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//     // And, var reverseStr = "amanaplanacanalpanama";
//
//     // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//     return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
// };
//
// const result = isPalindrome("A man, a plan, a canal. Panama");
// console.log(result);

//

// const result = Number.isInteger(4);
// console.log(result);

// const array = [1, 2, 1, 1, 3, 4, 3, 5];
//
// const findDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index);
// const duplicateElements = findDuplicates(array);
// console.log(duplicateElements);

//------------------

// const arr = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10]]];
//
// const flattenDeep = (arr) => {
//     return arr.reduce((acc, item) => {
//         if (Array.isArray(item)) {
//             return [...acc, ...flattenDeep(item)];
//         }
//
//         return [...acc, item];
//     }, []);
// };
//
// console.log(flattenDeep(arr));

//------------------

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3,
//         e: [ 1, 2, 3 ],
//     },
//     m: [
//         { a: 1 },
//         { a: 2 },
//         { a: 3 }
//     ],
// }
//
// const cloneDeep = (obj) => {
//     if (Array.isArray(obj)) {
//         return obj.reduce((acc, item) => {
//             if (typeof item === "object") {
//                 return [ ...acc, cloneDeep(item) ];
//             }
//
//             return [ ...acc, item ];
//         }, []);
//     }
//
//     if (typeof obj === "object" && !Array.isArray(obj)) {
//         return Object.entries(obj).reduce((acc, [ key, value ]) => {
//             if (typeof value === "object") {
//                 return { ...acc, [key]: cloneDeep(value) };
//             }
//
//             return { ...acc, [key]: value };
//         }, {});
//     }
//
//     return obj;
// };

// const objClone = cloneDeep(obj);
// console.log(objClone);

//------------------

// const add = (a) => (b) => a + b;
// console.log(add(1)(2));

//------------------

// const sliceIntoChunks = (arr, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
// };
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arr, 3));

