import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Trail({ route }) {
  const { trail } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Image source={{ uri: trail.trail_img }} style={styles.image} resizeMode="contain" />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{trail.trail_name}</Text>
        <View style={styles.durationContainer}>
          <Icon name="clock" size={20} color='black' />
          <Text style={styles.duration}>{trail.trail_duration} min </Text>
        </View>
        <View style={styles.difficultyContainer}>
        <Text style={styles.difficulty}>{trail.trail_difficulty}</Text>
        </View>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.description}>{trail.trail_desc}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  image: {
    width: '80%',
    aspectRatio: 16 / 9,
    marginTop: 20
  },
  contentContainer: {
    width: '80%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40
  },
  duration: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5
  },
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
    marginStart: 250
  },
  difficulty: {
    fontSize: 16,
    color: 'black',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textAlign: 'justify'
  }
});
