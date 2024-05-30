import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {
  return (
    <>
      <LinearGradient
        colors={[Colors.primaryColor, Colors.secondaryColor]}
        style={styles.topContainer}>
        <View style={styles.searchBar}>
          <Icon
            name="search"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Procurar..." />
        </View>
        <TouchableOpacity style={styles.premiumButton}>
          <Icon name="diamond" size={35} color="black" />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: Colors.white,
    marginVertical: 20,
    marginLeft: 16,
    padding: 12,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 5,
    marginTop: 4,
  },
  premiumButton: {
    marginTop: 16,
    padding: 16,
  },
});
