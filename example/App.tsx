import ExpoIdNowAutoIdent from 'expo-idnow-auto-ident';
import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function App() {
  const [token, setToken] = React.useState('');

  const startIdentification = async () => {
    try {
      const result = await ExpoIdNowAutoIdent.startIdentification(token.toLocaleUpperCase(), 'en');
      Alert.alert('Identification Result', JSON.stringify(result));
    } catch (error) {
      Alert.alert('Error', JSON.stringify(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Expo IDnow AutoIdent API Example</Text>
      <TextInput
        placeholder="Enter your token"
        value={token}
        onChangeText={setToken}
        style={styles.input}
      />
      <Button
        title="Start Identification"
        onPress={startIdentification}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
