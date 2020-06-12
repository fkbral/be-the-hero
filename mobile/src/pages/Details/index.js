import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
  const route = useRoute();
  const { incident } = route.params;

  const navigation = useNavigation();

  const message = `Olá ${
    incident.name
  }, estou entrando em contato, pois gostaria de ajudar o caso ${
    incident.title
  }, com a quantia de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function handleGoBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      body: message,
      recipients: [incident.email],
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <View style={styles.incidentData}>
          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>{incident.name}</Text>
          <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>{incident.name}</Text>
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={[styles.incidentValue, { marginBottom: 0 }]}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          </Text>
        </View>
      </View>

      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactTitle}>Seja o herói deste caso.</Text>
        <Text style={styles.contactSubtitle}>Entre em contato</Text>
        <View style={styles.contactButtonContainer}>
          <TouchableOpacity onPress={sendWhatsapp} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendEmail} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
