// Dependencies
import { StyleSheet,Image ,TextInput, TouchableOpacity, View, Text, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// Redux

import { useDispatch, useSelector } from 'react-redux';
import { selectApp, selectAppStatus, selectCookies, selectUserStatus } from '../redux/selectors/selectors';


// Styles and Components
import { Colors } from '../styles';

import appBackground from '../../assets/app_background.jpeg';
import braguiaLogo from '../../assets/braguia_logo_green.png';
import BackButton from '../components/backButton';
import PartnerCard from '../components/PartnerCard';


export default function Partners({ navigation }) {
  const app = useSelector(selectApp);
  const partners = app.partners;
  

  const renderItem = ({ item }) => (
    <PartnerCard partner={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <ImageBackground source={appBackground} style={styles.background}>
        <Image source={braguiaLogo} style={styles.logo} resizeMode="contain" />
        <FlatList
          data={partners}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contactsContainer}
        />
      </ImageBackground>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    paddingTop: 50,
  },
logo: {
    width: '50%',
    height: 150,
    marginBottom: 50,
},
backButtonContainer: {
    position: 'absolute',
    top: 25, 
    left: 25,
    zIndex: 1,
  },
contactsContainer: {
  justifyContent: 'space-between',
  marginHorizontal: 16,
  marginTop: 50,
},
});
