// 2637. Promise Time Limit

function timeLimit(fn, t) {
    return async (...args) => {
        let timeout;

        const timerPromise = new Promise((_, reject) => {
            timeout = setTimeout(() => reject('Time Limit Exceeded'), t);
        });

        try {
            const result = await Promise.race([fn(...args), timerPromise]);
            clearTimeout(timeout);
            return result;
        } catch (err) {
            clearTimeout(timeout);
            throw err;
        }
    };
}