const connection = require('../database/connection');

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ngo = await connection('ngos').where({ id }).select('name').first();

    if (!ngo) {
      return res
        .status(400)
        .json({ error: `NGO with id ${id} does not exist` });
    }

    return res.json(ngo);
  }
}

module.exports = new SessionController();
