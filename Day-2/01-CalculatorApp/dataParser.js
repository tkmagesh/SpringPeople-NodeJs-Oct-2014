var url = require("url"),
    qs = require("querystring");


module.exports = function(req,res,next){
    req.url = url.parse(req.url, true);
    if (req.method === "GET"){
        req.body = req.url.query;
        next();
    }
    else if (req.method === "POST"){
        var data = "";
        req.on("data",function(chunk){
            data += chunk;
        });
        req.on("end", function(){
            req.body = qs.parse(data);
            next();
        });
    } else {
        next();
    }
}