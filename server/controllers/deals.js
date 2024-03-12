const Deal = require('../models/deal');

class DealsController {
  async create(req, res, next) {
    try {
      const newdeal = req.body;
      const result = await Deal.create(newdeal);

      if (result.status === 'ok') {
        res.status(201).json(result);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await Deal.deleteById(id);

      if (result) {
        res.status(200).json({ status: 'ok', message: 'Successfully deleted' });
      } else {
        throw new Error('Deal not found');
      }
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const deals = await Deal.getAll();
      res.status(200).json(deals);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DealsController();