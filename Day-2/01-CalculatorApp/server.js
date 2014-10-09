var http = require("http"),
    appRunner = require("./appRunner"),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorRequestHandler = require('./calculatorRequestHandler'),
    resourceNotFoundHandler = require('./resourceNotFoundHandler');


    
var app = appRunner();
app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorRequestHandler);
app.use(resourceNotFoundHandler);

http.createServer(app.run()).listen(8085);
console.log("Server listening on port 8085");