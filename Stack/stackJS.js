/* Stacks -> FIFO

Functions; push, pop, peek, length
*/

var letters = [] // our stack
var word = "maugarcia"

var rword = ""

// Push letters of word into stack
for(let i = 0; i < word.length; i++){
  letters.push(word[i])
}

// Pop in reverse order
for(let i = 0; i < word.length; i++){
  rword += letters.pop()
}

//Check for palindrome
if(rword === word) console.log(word + " is a palindrome")
else console.log(word + " isn't palindrome")