function isOneEdit (strA: string, strB: string): boolean {
    const arrStrA: string[] = strA.split("")
    const arrStrB: string[] = strB.split("")

    let result = false

    if (arrStrA.length === arrStrB.length) {
        let changes = 0
        for (let i = 0; i < arrStrA.length; i++) {
            arrStrA[i] === arrStrB[i] ? changes = changes : changes += 1
        }

        changes > 1 ? result = false : result = true

        return result
    }

    else if (arrStrA.length === arrStrB.length + 1) {
        for (let i = 0; i < arrStrB.length; i++) {
            arrStrA[i] === arrStrB[i] ? result = true : result = false
        }

        return result
    }

    else if (arrStrA.length === arrStrB.length - 1) {
        for (let i = 0; i < arrStrA.length; i++) {
            arrStrA[i] === arrStrB[i] ? result = true : result = false
        }

        return result

    }

    else {
        result = false
        return result
    }

}

console.log(isOneEdit("banan", "banana"))
console.log(isOneEdit("bananak", "banana"))
console.log(isOneEdit("panana", "banana"))
console.log(isOneEdit("bananaaa", "banana"))