import ExpoIdNowAutoIdent from 'expo-idnow-auto-ident';
import React from 'react';
import { Alert, Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [token, setToken] = React.useState('');

  const startIdentification = async () => {
    try {
      const result = await ExpoIdNowAutoIdent.startIdentification(token.toLocaleUpperCase(), 'en');
      Alert.alert('Identification Result', JSON.stringify(result));
      console.log(result);
    } catch (error) {
      Alert.alert('Error', JSON.stringify(error));
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Enter your token</Text>
          <TextInput
            placeholder="xxx-xxxxx"
            value={token}
            onChangeText={setToken}
            style={styles.input}
          />
          <Button
            title="Start Identification"
            onPress={startIdentification}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});
