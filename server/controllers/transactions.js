const { BadRequestError } = require("../middlewares/errors");
const Item = require("../models/item");
const Deal = require("../models/deal");
const Sale = require("../models/sale");
const Transaction = require("../models/transaction");

class TransactionsController {
  async create(req, res, next) {
    try {
      const { cart } = req.body;

      if (!cart) throw new BadRequestError("cart items is required");

      const itemIds = cart.items?.map((item) => item._id);
      const items = await Item.find({ _id: { $in: itemIds } });

      if (items.length !== itemIds.length) {
        throw new BadRequestError("item not found");
      }

      if (items.length === 0) {
        throw new BadRequestError("cart is empty");
      }

      // check for stock
      items.forEach((item) => {
        const cartItem = cart.items.find(
          (cartItem) => cartItem._id === item._id.toString()
        );
        if (item.quantity < cartItem.quantity) {
          throw new BadRequestError(`${item.name} is out of stock`);
        }
      });

      // update stock
      items.forEach(async (item) => {
        const cartItem = cart.items.find(
          (cartItem) => cartItem._id === item._id.toString()
        );
        item.quantity -= cartItem.quantity;
        await item.save();
      });

      const totalPrice = items.reduce((total, item) => {
        const cartItem = cart.items.find(
          (cartItem) => cartItem._id === item._id.toString()
        );
        return total + item.pricePerItem * cartItem.quantity;
      }, 0);

      // check for applied deals
      const dealId = cart.deal;
      let deal; // contains type, value, maxDiscount, etc
      if (dealId) {
        deal = await Deal.findById(dealId);
        if (!deal) throw new BadRequestError("deal not found");
      }

      // calculate total discount
      let totalDiscount = 0;
      if (deal) {
        if (deal.type === "percentage") {
          totalDiscount = (totalPrice * deal.value) / 100;
          if (deal.maxDiscount && totalDiscount > deal.maxDiscount) {
            totalDiscount = deal.maxDiscount;
          }
        } else if (deal.type === "fixed") {
          totalDiscount = deal.value;
        }
      }

      // calculate avg discount per item
      const avgDiscount = Math.floor(totalDiscount / items.length);

      // create sales for each item
      const sales = await Sale.insertMany(
        items.map((item) => {
          const cartItem = cart.items.find(
            (cartItem) => cartItem._id === item._id.toString()
          );
          return {
            item: item._id,
            quantity: cartItem.quantity,
            discount: avgDiscount,
            totalPrice: item.pricePerItem * cartItem.quantity,
          };
        })
      );

      // create transaction
      const transaction = await Transaction.create({
        sales: sales.map((sale) => sale._id),
        totalPrice,
        totalDiscount,
      });

      res.status(201).json({ transaction, sales, items });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TransactionsController();
