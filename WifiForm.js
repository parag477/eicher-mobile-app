import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { firestore } from './firebaseConfig';

const WifiForm = ({ navigation }) => {
  const [wifiId, setWifiId] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [aadharCard, setAadharCard] = useState('');

  const handleSubmit = async () => {
    try {
      await firestore.collection('wifiCredentials').add({
        wifiId,
        password,
        mobileNo,
        aadharCard
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'WiFi credentials saved successfully!'
      });
      setWifiId('');
      setPassword('');
      setMobileNo('');
      setAadharCard('');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect to WIFI</Text>
      <TextInput style={styles.input} placeholder="WIFI ID" value={wifiId} onChangeText={setWifiId} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Mobile Number" value={mobileNo} onChangeText={setMobileNo} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Aadhar Card No." value={aadharCard} onChangeText={setAadharCard} keyboardType="numeric" />
      <Button title="Submit" onPress={handleSubmit} />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 5 }
});

export default WifiForm;
