function everyPrimeUpTo(max){
    let primes = []
    for (let i = 2; i < max + 1; i++){
        primes.push(i)
    }
    return primes.filter(function(num){
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                return false
            }
        }
        return true
    })
}

console.log(everyPrimeUpTo(10000))