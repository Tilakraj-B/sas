const { BadRequestError, UnauthorizedError } = require("../middlewares/errors");
const User = require("../models/User");
const { generateToken } = require("../utils/jwt");
const { comparePassword, hashPassword } = require("../utils/password");

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw new BadRequestError("Email is required");
      if (!password) throw new BadRequestError("Password is required");

      const user = await User.findOne({ email });
      if (!user) throw new UnauthorizedError("Invalid email");

      const isPasswordValid = await comparePassword(
        password,
        user.passwordHash
      );
      if (!isPasswordValid) throw new UnauthorizedError("Invalid password");

      const payload = { id: user._id, role: user.role };
      const token = generateToken(payload);

      res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  }

  async signup(req, res, next) {
    try {
      const { name, email, password, secret } = req.body;

      if (secret !== process.env.SECRET_KEY_FOR_SIGNUP) {
        throw new UnauthorizedError("Invalid secret key");
      }

      if (!name) throw new BadRequestError("Name is required");
      if (!email) throw new BadRequestError("Email is required");
      if (!password) throw new BadRequestError("Password is required");

      const user = await User.findOne({ email });

      if (user) throw new BadRequestError("Email already exists");

      const passwordHash = await hashPassword(password);

      const newUser = await User.create({
        name,
        email,
        passwordHash,
        role: "manager",
      });

      const payload = { id: newUser._id, role: newUser.role };
      const token = generateToken(payload);

      res.status(201).json({ user: newUser, token });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      res
        .status(200)
        .clearCookie("token")
        .json({ message: "User logged out successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
