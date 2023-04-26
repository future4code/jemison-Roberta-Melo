function  stringCompression(str: string): string {
    const substrings: string[] = str.split("")
    let lastChar: string[] = []
    let charCount = 1

    for (let i = 0; i < substrings.length; i++) {
       if (substrings[i + 1] === substrings[i]) {
            charCount++
        } else {
            lastChar.push(substrings[i], charCount.toString())
            charCount = 1
        }
    }

    const newString = lastChar.join("")

    return lastChar.length > substrings.length ? str : newString
}

console.log(stringCompression ("aabbb"))
console.log(stringCompression ("aabcccccaaa"))
console.log(stringCompression ("accurate"))
console.log(stringCompression ("escola"))
console.log(stringCompression ("accuraaaaaaaaaate"))