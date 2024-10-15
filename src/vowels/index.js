const string = 'hello world'

function VowelsCount(str) {

    const vowels = 'aeiou'
    const letters = str.split('')
    return letters.filter(letter => vowels.includes(letter)).length

}

console.log(VowelsCount(string))