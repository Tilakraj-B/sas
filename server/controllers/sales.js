const { BadRequestError } = require("../middlewares/errors");
const Sale = require("../models/sale");

class SalesController {
  async getByItemId(req, res, next) {
    try {
      const { itemId } = req.params;
      const { start, end } = req.query;

      if (!itemId) throw new BadRequestError("itemId is required");

      const sales = await Sale.find({
        item: itemId,
        date: { $gte: start, $lte: end },
      }).populate("item");
      res.status(200).json({ sales });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SalesController();
