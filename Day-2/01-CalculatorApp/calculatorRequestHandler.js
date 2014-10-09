var calculator = require('./calculator');

function calculate(req,res,next){
    console.log("calculator request handler");
    if (req.url.pathname === "/calculate"){
        var number1 = parseInt(req.body.number1,10),
            number2 = parseInt(req.body.number2,10),
            result = calculator[req.body.operation](number1,number2);
        res.write(result.toString());
        res.end();
    } else {
        next();
    }
}
module.exports = calculate;