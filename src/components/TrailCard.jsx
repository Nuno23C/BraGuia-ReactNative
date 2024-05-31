// Dependencies
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Styles
import {Colors} from '../styles';

export default function TrailCard({trail}) {
  const navigation = useNavigation();

  const handleSelectTrail = trail_id => {
    // Verify user type
    navigation.navigate('Trail', {trail_id});
  };

  return (
    <TouchableOpacity
      style={styles.trailCard}
      onPress={handleSelectTrail(trail.id)}>
      <View>
        <Image source={{uri: trail.trail_img}} style={styles.trailImage} />
      </View>
      <View style={styles.trailInfo}>
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Text style={styles.trailExplore}>Explorar</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  trailCard: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  trailImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  trailInfo: {
    flexDirection: 'row',
  },
  trailName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  trailExplore: {
    fontSize: 16,
  },
});
