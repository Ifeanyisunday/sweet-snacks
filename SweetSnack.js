class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        if(this.stack.length == 0){
            return true
        }else{
            return false
        }
    }

    getStack(){
        return this.stack
    }
}


function displayReverseNumbers(arrNumbers){
    let reverseNumbers = []
    for (let i = 0; i < arrNumbers.length; i++){
        reverseNumbers.unshift(arrNumbers[i]);
    }
    return reverseNumbers;
}


function sumEvenNumbers(number){
    let sum = 0;
    for(let index = 0; index < number.length; index++){
        if(number[index] % 2 == 0){
            sum = sum + number[index];
        }
    }
    return sum;
}


class Queue {
    constructor(){
        this.queue = [];
    }

    enQueue(element){
        this.queue.push(element)
    }

    deQueue(){
        this.queue.shift()
    }

    front(){
        return this.queue[0]
    }

    isEmpty(){
        if(this.queue.length == 0){
            return true
        }else{
            return false
        }
    }

    getQueue(){
        return this.queue
    }
}


function arrayToObject(keys, values) {
    let newObj = {}
    let index = 0
    for (let i = 0; i < keys.length; i++){
        newObj[keys[i]] = values[index];
        index = index + 1;
    }
    return newObj;
}

module.exports = {Stack, displayReverseNumbers, sumEvenNumbers, Queue, arrayToObject};