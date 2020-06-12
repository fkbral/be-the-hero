const connection = require('../database/connection');

class ProfileController {
  async index(req, res) {
    const ngo_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where({ ngo_id })
      .select('*');

    return res.json(incidents);
  }
}

module.exports = new ProfileController();
