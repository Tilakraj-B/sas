const User = require("../models/User");
const { BadRequestError } = require("../middlewares/errors");
const { generateRandomPassword, hashPassword } = require("../utils/password");

class UsersController {
  async createClerk(req, res, next) {
    try {
      const { email, name } = req.body?.clerk;

      if (!email) throw new BadRequestError("Email is required");
      if (!name) throw new BadRequestError("Name is required");

      const password = generateRandomPassword();
      const passwordHash = await hashPassword(password);

      const user = await User.create({
        email,
        name,
        passwordHash,
        role: "clerk",
      });

      // send email to the clerk with the password
      // ...

      res.status(201).json({ user });
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw new BadRequestError("id is required");

      await User.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();
