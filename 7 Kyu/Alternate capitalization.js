// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let even = [...s].map((val, idx) => (idx % 2 === 0) ? val.toUpperCase():val).join("")
    let odd = [...s].map((val, idx) => (idx % 2 !== 0) ? val.toUpperCase():val).join("")
    return [even, odd]
  };