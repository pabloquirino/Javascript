function Fibonacci(n) {

    if (n <= 0) return []
    if(n === 1) return [0]
 
    let sequence = [0, 1]

    for(let i = 2; i < n; i++) {

        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
        sequence.push(nextNumber)

    }

    return sequence.join(', ')

}

console.log(Fibonacci(10))