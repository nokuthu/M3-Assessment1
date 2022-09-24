import React, { useState, } from 'react';
import { NavigationContainer, StackActions,  } from '@react-navigation/native';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import Drive_Ind from './assets/Drive_Ind.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, options }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={options.container} />
        <Stack.Screen name="Password Reset" component={PasswordResetScreen} options={{ headerShown: false, options }} /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.container} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
  

function LoginScreen({ navigation }) {
  return (<View style={styles.container}>
    <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}>Login</Text>
    <Text style={{ Maxheight:90, height:70 }}></Text>
    <Image source={Drive_Ind} style={{ width: 250, height: 250 }} />
    <Text></Text>
    <Text style={{ color: "#fff", fontSize: 15,  }}>Email Address</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      />
    <Text></Text>
    <Text style={{ color: "#fff", fontSize: 15 }}>Password</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 } 
      secureTextEntry={true}
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign In' onPress={ () => { navigation.navigate("Dashboard"); }}></Button>
    <Text></Text>
    <Text style={{ color: "#FFF", fontSize: 14, }}>Forgot Password?</Text>
    <Text onPress={() => (navigation.navigate("Password Reset"))} 
    style={{ color: "#fff", fontSize: 14, color: '#00F' }}>Reset</Text>
    <Text style={{ height: 50 }}></Text>
    <StatusBar style="auto" />
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("Sign Up")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign Up.</Text>
  </View>
  );
}

function SignUpScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <Image source={Drive_Ind} style={{ width: 150, height: 250}} />
    <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Full Name</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Vehicle Registration</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Email Address</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Password</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30,  }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign Up' onPress={() => { navigation.navigate("Login"); }} style={{ top: 0  }}></Button>  
    <Text style={{ height:90, Maxheight:100 }}></Text>
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("Login")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign In.</Text>
    </View>
  );
}

function PasswordResetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ height: 50 }}></Text>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}>Reset Password</Text>
      <Text style={{ Maxheight:90, height:70 }}></Text>
      <Image source={Drive_Ind} style={{ width: 250, height: 200 }} />
      <Text style={{ color: "#fff", fontSize: 15, textAlign: "center", fontWeight: "bold"}} >Enter email address to reset Password.</Text>
      <Text style={{ height:35 }}></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Email Address</Text>
      <Text></Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30, }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Button title='Submit' onPress={() => {navigation.navigate("Login")}}></Button>
      <Text style={{ height: 150 }}></Text>
    </View>
  );
}

function DashboardScreen({ navigation }) {
    
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

const options = StyleSheet.create({
  container: {
    headerStyle: {
      backgroundColor: '#26c2de',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      justifyContent: 'center'
    },
  }
});

export default App;