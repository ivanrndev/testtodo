import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Registration = () => {
  const [logInput, setLogInput] = useState();
  const [pasInput, setPasInput] = useState();

  return (
    <View style={styles.wrap}>
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={require('../assets/tag.png')} />
        <View style={styles.imageTextWrap}>
          <Text style={styles.imageText}>TAG</Text>
          <Text style={styles.imageText}>delivery</Text>
        </View>
      </View>
      <View style={styles.registrWrap}>
        <Text style={styles.title}>Вход</Text>
        <TextInput style={styles.registrInput} value={logInput} onChangeText={setLogInput} placeholder="Номер телефона" />
        {}
        <TextInput style={styles.registrInput} value={pasInput} onChangeText={setPasInput} placeholder="Пароль" />
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.text}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
  },
  imageWrap: {
    marginTop: 70,
  },
  image: {
    height: 200,
    width: 200,
    transform: [{rotate: '120deg'}],
  },
  imageTextWrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-15deg'}],
    marginTop: 60,
    marginLeft: 40,
  },
  imageText: {
    fontWeight: '500',
    fontSize: 35,
  },
  registrWrap: {},
  title: {
    fontSize: 30,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 20,
  },
  registrInput: {
    width: 370,
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 35,
    fontSize: 20,
  },
  signInButton: {
    width: 370,
    height: 55,
    backgroundColor: '#141A1C',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    width: 370,
    height: 55,
    backgroundColor: '#989BD2',
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpButton: {
    width: 370,
    height: 55,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  helpText: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default Registration;
