const Incident = require('../models/Incident');

class ProfileController {
  async index(req, res) {
    const ngo_id = req.headers.authorization;

    const incidents = await Incident.findAll({ where: { ngo_id } })

    return res.json(incidents);
  }
}

module.exports = new ProfileController();
