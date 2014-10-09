var http = require("http"),
    appRunner = require("./appRunner"),
    dataParser = require('./dataParser'),
    cookieParser = require('./cookieParser'),
    sessionHanler = require('./sessionHandler'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorRequestHandler = require('./calculatorRequestHandler'),
    resourceNotFoundHandler = require('./resourceNotFoundHandler');


    
var app = appRunner();
app.use(dataParser);
app.use(cookieParser);
app.use(function(req,res,next){
    console.log(JSON.stringify(req.body));
    next();
});

app.use(sessionHanler);
app.use(staticResourceServer);
app.use(calculatorRequestHandler);
app.use(function(req,res,next){
    if (req.url.pathname === "/session"){
        console.log("session = " ,req.session);
        res.write(JSON.stringify(req.session));
        res.end();
    } else {
        next();
    }
});
app.use(function(req,res,next){
   if (req.url.pathname === "/calculateCount"){
       res.write(req.session["calculateCount"].toString());
       res.end();
   } else {
       next();
   }
});
app.use(resourceNotFoundHandler);

http.createServer(app.run()).listen(8085);
console.log("Server listening on port 8085");
