/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower as Logout, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ngoId = localStorage.getItem('ngoId');
  const ngoName = localStorage.getItem('ngoName');

  useEffect(() => {
    api
      .get('profile', {
        headers: { Authorization: ngoId },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ngoId },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Error ao deletar caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>{`Bem-vinda, ${ngoName}`}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button" className="logout">
          <Logout />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
