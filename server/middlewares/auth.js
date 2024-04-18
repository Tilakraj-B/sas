const { verifyToken } = require("../utils/jwt");
const { UnauthorizedError, ForbiddenError } = require("./errors");

const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new UnauthorizedError("Unauthorized");

    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
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
