const CharacterAmountRange = document.getElementById('CharacterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includesUppercaseElement = document.getElementById('includesUppercase')
const includesNumbersElement = document.getElementById('includesNumbers')
const includesSymbolsElement = document.getElementById('includesSymbols')
const passwordDisplay = document.getElementById('password-display')


const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97, 112)
const NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 67)
const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includesUppercase = includesUppercaseElement.checked
    const includesNumbers = includesNumbersElement.checked
    const includesSymbols = includesSymbolsElement.checked
    const password = generatePassword(characterAmount, includesUppercase, includesNumbers, includesSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includesUppercase, includesNumbers, includesSymbols) {
    let charCodes = LOWERCASE_CHAR_CODE
    if (includesUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
    if (includesNumbers) charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
    if (includesSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}
/* const passwordCharacters = []
for (let i = 0; i < characterAmount; i++) {
  const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
  passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join('')
} */



function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)

    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}


