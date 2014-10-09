var allSessionObjects = {
    default : {}
};
module.exports = function(req,res,next){
    console.log("allSessionObjects = ");
    console.log(allSessionObjects);
    var sessionId = "";
    if (!req.cookies["sessionId"]){
        sessionId = new Date().getTime().toString();
        res.setHeader('Set-Cookie',["sessionId=" + sessionId]);
        allSessionObjects[sessionId] = {
             message : "User [" + sessionId + "] logged in at " + new Date().toDateString()
        };
    } else {
        sessionId = req.cookies["sessionId"];
    }
    req["session"] = allSessionObjects[sessionId];
    next();
    /*response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    console.log(req.url.pathname);
    if (req.url.pathname === "/login"){
        console.log(req.url.body);
        var userName = req.body.username;
        if (!allSessionObjects[userName]){
            allSessionObjects[userName] = {

            };
            req["session"] = allSessionObjects[userName];
        }
       res.end();
    } else {
        var userName = req.body.username;
        req["session"] = allSessionObjects[userName] || allSessionObjects["default"];
        next();
    }*/
}
