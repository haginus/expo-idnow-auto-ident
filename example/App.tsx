import ExpoIdNowAutoIdent from 'expo-idnow-auto-ident';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function App() {
  const [token, setToken] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Module API Example</Text>
      <TextInput
        placeholder="Enter your token"
        value={token}
        onChangeText={setToken}
        style={styles.input}
      />
      <Button
        title="Start Identification"
        onPress={() => ExpoIdNowAutoIdent.startIdentification(token)}
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
