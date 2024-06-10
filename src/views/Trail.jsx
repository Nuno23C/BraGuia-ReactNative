// Dependencies
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// Styles and Components
import { Colors } from '../styles';
import BackButton from '../components/backButton';
import FavButton from '../components/favButton';
import Button from '../components/Button';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateTrailHistory } from '../redux/actions/userActions';
import { selectTrailHistory } from '../redux/selectors/selectors';

export default function Trail({ route, navigation }) {
  const dispatch = useDispatch();
  const { trail } = route.params;
  const [pins, setPins] = useState([]);
  const currentTrailHistory = useSelector(selectTrailHistory);

  useEffect(() => {
    const pinsMap = new Map();

    trail.edges.forEach((edge) => {
      if (!pinsMap.has(edge.edge_start.id)) {
        pinsMap.set(edge.edge_start.id, edge.edge_start);
      }
      if (!pinsMap.has(edge.edge_end.id)) {
        pinsMap.set(edge.edge_end.id, edge.edge_end);
      }
    });

    setPins(Array.from(pinsMap.values()));
  }, [trail.edges]);

  const handleSelectPin = (pin) => {
    navigation.navigate('Pin', { pin });
  };

  const handleStartTrail = () => {
    let newTrailList = [];

    if (currentTrailHistory && currentTrailHistory.length > 0) {
      const trailIndex = currentTrailHistory.indexOf(trail.trail_name);

      if (trailIndex !== -1) { // trail already in history
        // removing trail from history
        newTrailList = [
          ...currentTrailHistory.slice(0, trailIndex),
          ...currentTrailHistory.slice(trailIndex + 1)
        ];
      } else {
        newTrailList = [...currentTrailHistory];
      }
    }

    newTrailList.unshift(trail.trail_name);

    console.log('New Trail List:', newTrailList);

    dispatch(updateTrailHistory(newTrailList));
  }

  return (
    <ScrollView>
      <BackButton />
      <FavButton />
      <Image source={{ uri: trail.trail_img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{trail.trail_name}</Text>
        <View style={styles.underTitle}>
          <View style={styles.durationContainer}>
            <Icon name="stopwatch-outline" size={24} color="black" />
            <Text style={styles.durationText}>{trail.trail_duration} min</Text>
          </View>
          {
            trail.trail_difficulty === 'E' ?
            <Image source={require('../../assets/easy.png')} style={{ width: 80, height: 35 }} /> :
            trail.trail_difficulty === 'M' ?
            <Image source={require('../../assets/medium.png')} style={{ width: 95, height: 45 }} /> :
            <Image source={require('../../assets/hard.png')} style={{ width: 80, height: 30 }} />
          }
        </View>
        <Text style={styles.descTitle}>Descrição:</Text>
        <Text style={styles.description}>{trail.trail_desc}</Text>
        <Text style={styles.pinsTitle}>Pontos de interesse:</Text>
        <View style={styles.pinsContainer}>
          {
            pins.map((pin, index) => (
              <TouchableOpacity key={index} style={styles.pin} onPress={() => handleSelectPin(pin)}>
                <Text style={{color: "white"}}>{pin.pin_name}</Text>
                <Icon name="eye" size={18} color="white" style={{marginLeft: 5}}/>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
      <View style={styles.startButton}>
        <Button title="INICIAR" onPress={() => handleStartTrail()}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: 250,
    marginTop: 30,
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
  },
  underTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 16,
    color: Colors.black,
    marginLeft: 5,
  },
  descTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 10,
    letterSpacing: 0.2,
  },
  pinsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 30,
  },
  pinsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  pin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 16,
    margin: 5,
  },
  startButton: {
    marginVertical: 30,
    marginHorizontal: 16,
  }
});
