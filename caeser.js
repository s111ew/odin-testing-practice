function caeserCipher(str, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (alphabet.includes(char.toLowerCase())) {
      const isUpperCase = char === char.toUpperCase()

      const currentIndex = alphabet.indexOf(char.toLowerCase())
      const newIndex = (currentIndex + key) % 26

      const newChar = alphabet[newIndex]
      newString += isUpperCase ? newChar.toUpperCase() : newChar
    } else {
      newString += char
    }
  }
  return newString
}

console.log(caeserCipher('xyz', 3))

module.exports = caeserCipher
