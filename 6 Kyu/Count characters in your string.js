// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//Parameters
//String
//Return
//Object of key value pairs of characters; are uppercase counted separately from lowercase?
//Examples
//count("aba") => { a: 2, b: 1 }
//count("") => {}
//Psuedocode
//loop through letters in the string
//count num of letters

function count (string) {  
    let countOfChars = {}
    string.split("").forEach(val => {
        (val in countOfChars) ? countOfChars[val] += 1 : countOfChars[val] = 1
    })
    return countOfChars
}