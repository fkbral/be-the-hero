const crypto = require('crypto');

const connection = require('../database/connection');

class NgoController {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const ngoExists = await connection('ngos')
      .where({ email })
      .select('*')
      .first();

    if (ngoExists) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngos').insert({
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
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  }

  async delete(req, res) {
    const { id } = req.headers.authorization;

    const ngo = await connection('ngos').where({ id }).select('*').first();

    if (!ngo) {
      return res.status('401').json({ error: 'NGO does not exist' });
    }

    await connection('ngos').where({ id }).select('*').delete().first();

    return res.status(204).send();
  }
}

module.exports = new NgoController();
