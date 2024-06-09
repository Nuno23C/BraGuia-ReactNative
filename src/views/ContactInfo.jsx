// Dependencies
import { StyleSheet, View, Text,ImageBackground ,Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

// Styles and Components
import { Colors } from '../styles';
import BackButton from '../components/backButton';
import Button from '../components/Button';

import appBackground from '../../assets/app_background.jpeg';
import Icon from 'react-native-vector-icons/Feather';

import { Linking, PermissionsAndroid } from 'react-native';


export default function ContactInfo({ route, navigation }) {
  const { contact } = route.params;

  const handleCallPress = async () => {
    try {
     
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Linking.openURL(`tel:${contact.contact_phone}`);
      } else {
        console.log('Permissão para realizar chamadas negada');
      }
    } catch (error) {
      console.error('Erro ao solicitar permissão:', error);
    }
  };
  
    return (
        <View style={styles.container}>
            <ImageBackground source={appBackground} style={styles.background}>
            <View style={styles.backButtonContainer}>
                <BackButton />
            </View>
            <Text style={styles.detailName}>CONTACTO</Text>

            <TouchableOpacity onPress={handleCallPress}>
                <View style={styles.callNumber}>
                    <Icon name="phone-call" size={80} color={Colors.primaryColor} />
                    <Text style={styles.callText}>LIGAR</Text>
                </View>
            </TouchableOpacity>
       
            <Text style={styles.detailLabel}>NOME: </Text>
            <Text style={styles.setContactName}>{contact.contact_name}</Text>
    
            <Text style={styles.detailLabel}>TELEMÓVEL: </Text>
            <Text style={styles.setContactPhone}>{contact.contact_phone}</Text>
    
            <Text style={styles.detailLabel}>LINK: </Text>
            <Text style={styles.setContactLink}>{contact.contact_url}</Text>
    
            <Text style={styles.detailLabel}>EMAIL: </Text>
            <Text style={styles.setContactEmail}>{contact.contact_mail}</Text>
    
           
          </ImageBackground>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
      },
      detailName: {
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.black,
      },
      callNumber: {
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.contactsColor,
        borderRadius: 20,
      },
      callText: {
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.primaryColor,
      },
      detailLabel: {
        marginLeft: 40,
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'left',
      },
      setContactName: {
        marginLeft: 40,
        marginTop: 10,
        fontSize: 16,
        color: Colors.black,
      },
      setContactPhone: {
        marginLeft: 40,
        marginTop: 10,
        fontSize: 16,
        color: Colors.black,
      },
      setContactLink: {
        marginLeft: 40,
        marginTop: 10,
        fontSize: 16,
        color: Colors.black,
      },
      setContactEmail: {
        marginLeft: 40,
        marginTop: 10,
        fontSize: 16,
        color: Colors.black,
      },
      backButtonContainer: {
        position: 'absolute',
        top: 25, 
        left: 25,
        zIndex: 1,
      },
    });
