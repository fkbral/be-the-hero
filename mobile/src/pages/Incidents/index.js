import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get('/incidents', {
      params: { page },
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function handleDetails(incident) {
    navigation.navigate('Details', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        onEndReachedThreshold={0.2}
        onEndReached={loadIncidents}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <View style={styles.incidentData}>
              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={[styles.incidentValue, styles.incidentEnd]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDetails(incident)}
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather style={styles.detailsButtonIcon} name="arrow-right" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
