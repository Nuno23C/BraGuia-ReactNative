// Dependencies
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
// import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useDispatch, useSelector} from 'react-redux';

// Redux
// import {fetchTrails} from '../redux/actions/trailsActions';
// import {
//   selectTrailsStatus,
//   selectTrails,
// } from '../redux/selector/trailsSelectors';

// Styles and Components
import {Colors} from '../styles';

export default function Home() {
  // const dispatch = useDispatch();
  // const status = useSelector(selectTrailsStatus);
  // const trails = useSelector(selectTrails);

  // useEffect(() => {
  //   dispatch(fetchTrails());
  // }, [dispatch]);

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
      {/* <Button title="Get Trails" onPress={getTrails} />
      {trails == null || trails == undefined || trails.length == 0 ? (
        <Text>Loading...</Text>
      ) : (
        trails.map((trail, index) => {
          return (
            <View key={index}>
              <Text>{trail}</Text>
            </View>
          );
        })
      )} */}
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
