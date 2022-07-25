const jwt =require("jsonwebtoken")
const authentication=(req,res,next)=>{
    if (req.headers.authorization === undefined) {
       return res.status(403).json({
          success: false,
          message: "Forbidden",
        });
      }
      const token = req.headers.authorization.split(" ")[1];
    
      jwt.verify(token, process.env.SECRET, (err, result) => {
        if (err) {
         return res.status(403).json({
            success: false,
            message: "The token is invalid or expired",
          });
        }
       req.token=result
        next();
      });
}

module.exports ={authentication}