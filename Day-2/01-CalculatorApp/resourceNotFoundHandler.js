function resourceNotFound(req,res,next){
    res.statusCode = 404;
    res.end();
    next();
}
module.exports = resourceNotFound;