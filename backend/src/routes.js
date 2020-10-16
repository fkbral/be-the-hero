const express = require('express');

const NgoController = require('./controllers/NgoController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.store);

routes.post('/sessions', SessionController.store);

routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
