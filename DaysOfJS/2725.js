// 2725. Interval Cancellation

var cancellable = function(fn, args, t) {
    let isCancelled = false;
    fn(...args);
    
    const timer = setInterval(() => {
        if(!isCancelled) {
            fn(...args);
        }
    }, t);
    
    return function cancelFn(){
        isCancelled = true;
        clearInterval(timer);
    }
};
