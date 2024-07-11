const {Stack, displayReverseNumbers, sumEvenNumbers, Queue, arrayToObject} = require('./SweetSnack');

test('SweetSnack 1', () => {
    let numbers = [1, 2, 3, 4, 5];
    expect(displayReverseNumbers(numbers)).toEqual([5, 4, 3, 2, 1])
})

test('SweetSnack 2', () => {
    let numbers = [1, 2, 3, 4, 5];
    expect(sumEvenNumbers(numbers)).toEqual(6)
})

test('SweetSnack 3', () => {
    let words = ["one", "two", "three", "four", "five"];
    let numbers = [1, 2, 3, 4, 5];
    expect(arrayToObject(words, numbers)).toEqual({"one": 1, "two": 2, "three": 3, "four": 4, "five": 5});
})

test("Stack push test", () => {
    let stack1 = new Stack()
    stack1.push('one')
    stack1.push('two')
    stack1.push('three')
    expect(stack1.getStack()).toEqual(["one", "two", "three"])
})

test("Stack pop test", () => {
    let stack1 = new Stack()
    stack1.push('one')
    stack1.push('two')
    stack1.push('three')
    stack1.pop()
    expect(stack1.getStack()).toEqual(["one", "two"])
})

test("Stack peek test", () => {
    let stack1 = new Stack()
    stack1.push('one')
    stack1.push('two')
    stack1.push('three')
    stack1.push('four')
    stack1.push('five')
    expect(stack1.peek()).toEqual("five")
})

test("Stack isEmpty test", () => {
    let stack1 = new Stack()
    stack1.push('one')
    stack1.push('two')
    stack1.push('three')
    stack1.pop()
    stack1.pop()
    stack1.pop()
    expect(stack1.isEmpty()).toEqual(true)
})

test("Queue enQueue test", () => {
    let Queue1 = new Queue()
    Queue1.enQueue('one')
    Queue1.enQueue('two')
    Queue1.enQueue('three')
    expect(Queue1.getQueue()).toEqual(['one', 'two', 'three'])
})

test("Queue deQueue test", () => {
    let Queue1 = new Queue()
    Queue1.enQueue('one')
    Queue1.enQueue('two')
    Queue1.enQueue('three')
    Queue1.deQueue()
    expect(Queue1.getQueue()).toEqual(['two', 'three'])
})

test("Queue front test", () => {
    let Queue1 = new Queue()
    Queue1.enQueue('one')
    Queue1.enQueue('two')
    Queue1.enQueue('three')
    expect(Queue1.front()).toEqual('one')
})

test("Queue isEmpty test", () => {
    let Queue1 = new Queue()
    Queue1.enQueue('one')
    Queue1.enQueue('two')
    Queue1.enQueue('three')
    Queue1.deQueue()
    Queue1.deQueue()
    Queue1.deQueue()
    expect(Queue1.isEmpty()).toEqual(true)
})