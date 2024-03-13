const { BadRequestError } = require("../middlewares/errors");
const Item = require("../models/item");

class ItemsController {
  async create(req, res, next) {
    // ...
  }

  async getAll(req, res, next) {
    // ...
  }

  async getById(req, res, next) {
    // ...
  }

  async updateById(req, res, next) {
    try {
      const { id } = req.params;
      const { item } = req.body;

      if (!id) throw new BadRequestError("id is required");
      if (!item) throw new BadRequestError("item is required");

      const updatedItem = await Item.findByIdAndUpdate(id, item, {
        new: true,
      });
      res.status(200).json({ item: updatedItem });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemsController();
