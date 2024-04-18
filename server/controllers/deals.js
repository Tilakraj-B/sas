const Deal = require("../models/deal");

class DealsController {
  async create(req, res, next) {
    try {
      const { deal } = req.body;
      const newDeal = await Deal.create(deal);
      res.status(201).json({ deal: newDeal });
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw new BadRequestError("id is required");

      const deletedDeal = await Deal.findByIdAndDelete(id);
      res.status(200).json({ deal: deletedDeal });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const deals = await Deal.find({});
      res.status(200).json({ deals });
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) throw new BadRequestError("id is required");

      const deal = await Deal.findById(id);
      res.status(200).json({ deal });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DealsController();
