function areAnagrams(str1, str2) {
    const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    return normalize(str1) === normalize(str2)
}

console.log(areAnagrams("listen", "silent"))// true
console.log(areAnagrams("hello", "world"))// false