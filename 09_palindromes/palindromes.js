const palindromes = function (frase) {
  //We remove the blank spaces
  let newFrase = frase.replace(/\s/g, '')

  // We remove the special characters. We only allow letters and numbers
  newFrase = newFrase.replace(/[^a-zA-Z0-9 ]/g, '')
  newFrase = newFrase.toLowerCase() // We convert to lowercase

  let revertir = newFrase.split('').reverse().join('').toLowerCase()

  return newFrase === revertir ? true : false

  // if (newFrase === revertir) return true

  // return false
}

// Do not edit below this line
module.exports = palindromes
