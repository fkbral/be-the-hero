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
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 32,
    marginBottom: 16,
    color: '#737380',
    maxWidth: 260,
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
  detailsButton: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 24,
  },

  detailsButtonIcon: {
    fontSize: 15,
    color: '#E02041',
    paddingRight: 24,
  },
});
