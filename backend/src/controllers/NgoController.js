const crypto = require('crypto');
const Ngo = require('../models/Ngo');

class NgoController {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const ngoExists = await Ngo.findOne({ where: { email }});

    if (ngoExists) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const id = crypto.randomBytes(4).toString('HEX');

    await Ngo.create({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }

  async index(req, res) {
    const ngos = await Ngo.findAll();

    return res.json(ngos);
  }

  async delete(req, res) {
    const { id } = req.headers.authorization;

    const ngo = await Ngo.findOne({ where: { id }});

    if (!ngo) {
      return res.status('401').json({ error: 'NGO does not exist' });
    }

    await Ngo.destroy({ where: { id }});

    return res.status(204).send();
  }
}

module.exports = new NgoController();
