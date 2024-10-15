const string = 'A base do teto desaba'

function isPalindrome(str) {

    // minúsculas, sem espaços, sem acentuação e sem pontuação
    const FormattedStr = str.toLowerCase().replace(/[\s\-,.!?;:]/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    
    const reversed = FormattedStr.split('').reverse().join('')

    return reversed === FormattedStr
}

if(isPalindrome(string)) {

    console.log(`(${string}) is a palindrome`)

} else {

    console.log(`(${string}) is not a palindrome`)

}
