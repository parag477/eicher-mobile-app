import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { firestore } from './firebaseConfig';

const WifiList = () => {
  const [wifiData, setWifiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore.collection('wifiCredentials').get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setWifiData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved WiFi Credentials</Text>
      {wifiData.map(wifi => (
        <View key={wifi.id} style={styles.card}>
          <Text>WiFi ID: {wifi.wifiId}</Text>
          <Text>Password: {wifi.password}</Text>
          <Text>Mobile No: {wifi.mobileNo}</Text>
          <Text>Aadhar Card: {wifi.aadharCard}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 }
});

export default WifiList;
