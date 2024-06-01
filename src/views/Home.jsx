// Dependencies
import { StyleSheet, TextInput, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { fetchTrails } from '../redux/actions/trailsActions';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrailsStatus, selectTrails } from '../redux/selectors/selectors';

// Styles and Components
import { Colors } from '../styles';
import TrailCard from '../components/TrailCard';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const status = useSelector(selectTrailsStatus);
  const trails = useSelector(selectTrails);

  useEffect(() => {
    dispatch(fetchTrails());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <TrailCard trail={item} navigation={navigation} />
  );

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
      <View>
        <View style={styles.trailsHeader}>
          <Text style={styles.trailsTitle}>Roteiros</Text>
          <Text style={styles.trailsSubtitle}>Ver todos</Text>
        </View>
        <FlatList
          data={trails}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trailsContainer}
        />
      </View>
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
  trailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  trailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
  trailsSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primaryColor,
    paddingTop: 12,
  },
  trailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 10,
  },
});
