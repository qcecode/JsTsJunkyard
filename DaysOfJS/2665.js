class Counter{
    constructor(init) {
        this.init = init;
        this.presentCount = init;
    }
    
    increment(){
        this.presentCount++;
        console.log(this.presentCount);
        return this.presentCount;
    }
    
    decrement(){
        this.presentCount--;
        console.log(this.presentCount);
        return this.presentCount;
    }
    
    reset(){
        this.presentCount = this.init;
        console.log(this.presentCount);
        return this.presentCount;
    }
}
var createCounter = function(init) {
    return new Counter(init)
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
