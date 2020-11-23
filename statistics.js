
function max(arr) {
    let greatest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > greatest){
            greatest = arr[i]
        }
    }
    return greatest;
}

function min(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest;
}

function mean(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total / arr.length;
}

const arr = [12,6,35,43,142,522,49,62,46,24]

console.log(max(arr))
console.log(min(arr))
console.log(mean(arr))