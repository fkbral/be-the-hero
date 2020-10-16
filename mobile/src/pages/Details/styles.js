import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    marginTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  incident: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 24,
    marginBottom: 20,
  },
  incidentData: {
    paddingHorizontal: 24,
  },
  incidentProperty: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  incidentValue: {
    color: '#737380',
    marginBottom: 24,
  },
  contact: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  contactTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
  },
  contactSubtitle: {
    color: '#737380',
    marginVertical: 16,
  },
  contactButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    padding: 16,
    width: '48%',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
