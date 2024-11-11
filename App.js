import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();
import Home from "./Home";
import ListBike from "./ListBike";
import ClickBike from "./ClickBike"
const App=() =>{
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
       <Stack.Screen name="ListBike" component={ListBike} options={{headerShown : false}}/>
       <Stack.Screen name="ClickBike" component={ClickBike} options={{headerShown : false}}/>
       </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;