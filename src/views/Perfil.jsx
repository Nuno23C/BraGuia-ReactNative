// Dependencies
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles and Components
import { Colors } from '../styles';

export default function App() {
  const handleLogout = () => {
    console.log('Logout pressed');
  };

  const handleHistorico = () => {
    console.log('Histórico de Trails pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="account" size={100} color="black" />
      </View>
      <Text style={styles.userName}>NOME DE UTILIZADOR</Text>
      <View style={styles.separator} />

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="account" size={25} color="black" style={styles.icon} />
          <Text style={styles.infoText}>TIPO UTILIZADOR:</Text>
        </View>
        <View style={[styles.infoRow, styles.infoMargin]}>
          <Icon name="calendar" size={25} color="black" style={styles.icon} />
          <Text style={styles.infoText}>MEMBRO DESDE:</Text>
        </View>
        <View style={[styles.infoRow, styles.infoMargin]}>
          <Icon name="login" size={25} color="black" style={styles.icon} />
          <Text style={styles.infoText}>ÚLTIMO LOGIN:</Text>
        </View>
      </View>

      <View style={styles.valuesContainer}> 
        <View style={styles.valueRow}>
          <Text style={styles.valueText}>tipo_user</Text>
        </View>
        <View style={[styles.valueRow, styles.valueMargin]}>
          <Text style={styles.valueText}>data</Text>
        </View>
        <View style={[styles.valueRow, styles.valueMargin]}>
          <Text style={styles.valueText}>data</Text>
        </View>
      </View>

      <View style={styles.historicoButtonContainer}>
        <TouchableOpacity style={styles.historicoButton} onPress={handleHistorico}>
          <Icon name="history" size={20} color="white" style={styles.historicoButtonIcon} />
          <Text style={styles.historicoButtonText}>Histórico de Trails</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  userName: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    width: 300,
    marginTop: 25,
  },
  infoContainer: {
    marginTop: 100,
    marginStart: -150,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoMargin: {
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
  valuesContainer: {
    marginTop: -134,
    marginStart: 150,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 30,
  },
  valueText: {
    fontSize: 16,
    color: 'black',
  },
  valueMargin: {
    marginTop: 34,
  },
  historicoButtonContainer: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  historicoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  historicoButtonIcon: {
    marginRight: 10,
  },
  historicoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
