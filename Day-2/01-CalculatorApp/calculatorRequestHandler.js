var calculator = require('./calculator');

function calculate(req,res,next){
    console.log("calculator request handler");
    console.log("calculator request handler - session = ", req.session);
    if (req.url.pathname === "/calculate"){
        var number1 = parseInt(req.body.number1,10),
            number2 = parseInt(req.body.number2,10),
            result = calculator[req.body.operation](number1,number2);
        res.write(result.toString());
        /*var calculateCount = req.session["calculateCount"] || 0;
        req.session["calculateCount"] = ++calculateCount;*/
        res.end();
    } else {
        next();
    }
}
module.exports = calculate;
