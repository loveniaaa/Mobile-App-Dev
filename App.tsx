import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.text}>WELCOME</Text>
      </View>
      <View>
        <Text style={styles.textInput}>Username</Text>
        <TextInput placeholder="Masukan Nama anda" style={styles.input} />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder="Masukan Password anda"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },

  header: {
    marginBottom: 30,
  },

  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    width: '100%',
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
  },

  textInput: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },

  button: {
    color: 'red',
    backgroundColor: '#e87613',
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7c7d7e',
  },

  textButton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    padding: 8,
  },
});
