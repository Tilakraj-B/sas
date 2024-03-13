
const Transaction = require("./models/Transaction");

class TransactionsController {
  async create(req, res, next) {
    const { sales, totalPrice, totalDiscount } = req.body;

    try {
      const transaction = new Transaction({
        sales,
        totalPrice,
        totalDiscount
      });

      await transaction.save();

      return res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TransactionsController();
