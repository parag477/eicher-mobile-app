import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WifiForm from './WifiForm';
import WifiList from './WifiList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WifiForm">
        <Stack.Screen name="WifiForm" component={WifiForm} options={{ title: 'Add WiFi' }} />
        <Stack.Screen name="WifiList" component={WifiList} options={{ title: 'View Saved WiFi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
