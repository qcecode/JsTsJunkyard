// 2715. Timeout Cancellation
var cancellable = function(fn, args, t) {
    let isCancelled = false;
    
    const timer = setTimeout(() => {
        if(!isCancelled) {
            fn(...args);
        }
    }, t);
    
    return function cancelFn(){
        isCancelled = true;
        clearTimeout(timer);
    }
};