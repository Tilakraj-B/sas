const { BadRequestError } = require("../middlewares/errors");
const Item = require("../models/item");

class ItemsController {
  async create(req, res, next) {
    try {
      const { item } = req.body;

      if (!item) throw new BadRequestError("item is required");

      const newItem = await Item.create(item);
      res.status(201).json({ item: newItem });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const items = await Item.find();
      res.status(200).json({ items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw new BadRequestError("id is required");

      const item = await Item.findById(id);
      res.status(200).json({ item });
    } catch (error) {
      next(error);
    }
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
  async deleteById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw new BadRequestError("id is required");

      const deletedItem = await Item.findByIdAndDelete(id);
      res.status(200).json({ item: deletedItem });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemsController();
