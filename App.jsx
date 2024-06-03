import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, useTheme } from './src/styles/themeContext';

// Screens
import LandingPage from './src/views/LandingPage';
import Home from './src/views/Home';
import Perfil from './src/views/Perfil';
import Contactos from './src/views/Contactos';
import Trail from './src/views/Trail';
import Settings from './src/views/Settings';

enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Trail" component={Trail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <ThemeProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}} />
          <Stack.Screen name="Main" options={{headerShown: false}}>
            {() => (
              <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused }) => {
                    let iconName = '';

                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Perfil') {
                      iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Contactos') {
                      iconName = focused ? 'people' : 'people-outline';
                    }

                    return <Icon name={iconName} size={30} color="black" />;
                  },
                  tabBarActiveTintColor: 'black',
                  tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen
                  name="Home"
                  component={HomeStack}
                  options={{headerShown: false}}
                />
                <Tab.Screen
                  name="Perfil"
                  component={Perfil}
                  options={{headerShown: false}}
                />
                <Tab.Screen
                  name="Contactos"
                  component={Contactos}
                  options={{headerShown: false}}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
