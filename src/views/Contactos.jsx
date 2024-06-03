// Dependencies
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles and Components
import { Colors } from '../styles';

export default function Contactos() {
  const handleContactos = () => {
    console.log('Contactos pressed');
  };
  const handleSociais = () => {
    console.log('Redes Sociais pressed');
  };
  const handlePartners = () => {
    console.log('Parceiros pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/braguia_logo_green.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleContactos} style={styles.button}>
          <Icon name="phone" size={20} color="white" style={styles.buttonIcons} />
          <Text style={styles.buttonText}>CONTACTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSociais} style={styles.button}>
          <Icon name="instagram" size={20} color="white" style={styles.buttonIcons} />
          <Text style={styles.buttonText}>REDES SOCIAIS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePartners} style={styles.button}>
          <Icon name="handshake" size={20} color="white" style={styles.buttonIcons} />
          <Text style={styles.buttonText}>PARCEIROS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: '50%',
    height: 150,
    marginTop: 20,
  },
  buttonsContainer: {
    marginTop: 60,
    width: '70%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonIcons: {
    marginRight: 5,
  },
});
