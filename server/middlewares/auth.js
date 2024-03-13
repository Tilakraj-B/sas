const { verifyToken } = require("../utils/jwt");
const { UnauthorizedError, ForbiddenError } = require("./errors");

const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) throw new UnauthorizedError("Unauthorized");

    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const requireRole = (role) => {
  return (req, res, next) => {
    try {
      if (req.user.role !== role) {
        throw new ForbiddenError("Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { requireAuth, requireRole };
