const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      res.status(403).json({ message: "Access denied.User is not an Admin" });
    }
    //if the user is Admin proceed to next middleware
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
