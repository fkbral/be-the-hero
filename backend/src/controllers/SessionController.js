const Ngo = require('../models/Ngo');

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ngo = await Ngo.findOne({ where: { id }, attributes: ['name'] });

    if (!ngo) {
      return res
        .status(400)
        .json({ error: `NGO with id ${id} does not exist` });
    }

    return res.json(ngo);
  }
}

module.exports = new SessionController();
