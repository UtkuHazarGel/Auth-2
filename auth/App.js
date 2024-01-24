import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function NormalStack(){
  return(
    <Stack.Navigator 
    screenOptions={{headerStyle:{
      
      backgroundColor:"blueviolet",
    },
    headerTintColor:"white"
    }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle:"Kullanıcı Giriş"}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle:"Kullanıcı Kayıt"}}/>
      </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <NormalStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
