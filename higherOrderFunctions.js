function runXTimes(func, x){
    for (let i = 0; i < x; i++){
        func.call();
    }
}
function logHello(){
    console.log('hello!')
}
runXTimes(logHello, 15)