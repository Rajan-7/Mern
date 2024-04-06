const errorMiddleware = (err, req, res, next) => {

    
  const status = err.status || 400;
  const message = err.message || "Backend Problem";
  const moreDetails = err.moreDetails || "Internal problem";

  return res.status(status).json({ message, moreDetails });
};

module.exports = errorMiddleware;
