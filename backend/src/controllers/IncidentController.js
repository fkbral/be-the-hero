const Incident = require('../models/Incident');

class IncidentController {
  async store(req, res) {
    const ngo_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const incident = await Incident.create({
      title,
      description,
      value,
      ngo_id,
    });

    return res.json(incident);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ngo_id = req.headers.authorization;

    const incident = await Incident.findOne({ where: { id }, attributes: ['ngo_id']});

    if (incident.ngo_id !== ngo_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    await Incident.destroy({ where: { id }});

    return res.status(204).send();
  }
}

module.exports = new IncidentController();
