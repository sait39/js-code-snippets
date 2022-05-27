//MODULE PATTERN
let Logger = (function () {

    let logs = {};

    return {
        log: function (message) {
            let date = Date.now().toString();
            logs[date] = message;
        },
        getLogs: function () {
            return logs;
        }
    }

})()

Logger.log("Hi")
console.log(Logger.getLogs()); 

// export default Logger;