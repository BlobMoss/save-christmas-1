
function filter(arr, func) {
    const newArray = []
    for (let i = 0; i < arr.length; i++){
        if (!func(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray
}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const words = ['det', 'svåraste', 'med', 'programmering', 'är', 'att', 'skriva', 'dummy', 'text']
const filteredWords = filter(words, x => x.length < 5)
console.log(filteredWords)

// TEST 3 - skriv själv
const nums = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNums = filter(nums, x => x % 3 != 0)
console.log(filteredNums)