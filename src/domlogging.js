if (!window.console) {
    window.console = {}
}

if (!window.console.log) {
    window.console.log = function () { };
}

if (!window.console.error) {
    window.console.error = function () { };
}

(function () {
    "use strict";

    var logSuccess = Function.prototype.bind.call(console.log, console);
    console.log = function () {
        logSuccess.apply(console, arguments);
        
        var args = Array.prototype.slice.call(arguments);

        args.forEach(message => {
            var log = createLog(message, "success");
            addLogInDom(log);
        });
    }

    var logError = Function.prototype.bind.call(console.error, console);
    console.error = function () {
        logError.apply(console, arguments);

        var args = Array.prototype.slice.call(arguments);

        args.forEach(message => {
            var log = createLog(message, "error");
            addLogInDom(log);
        });
    }

    function createLog(message, logType) {
        var log = document.createElement("div");
        log.className = `${log.classname} log log-${logType}`;
        var messageNode = document.createTextNode(message);
        log.appendChild(messageNode);

        return log;
    }

    function addLogInDom(log) {
        var logsContainer = document.querySelector("#logs");
        logsContainer.appendChild(log);
    }

    window.onerror = function(message, url, lineNumber){
        console.error(`JS error: ${message} on line ${lineNumber} for ${url}`);
    };

    console.log("Success");
    console.error("Error");
})();