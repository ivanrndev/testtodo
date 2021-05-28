import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ActionTypes from '../sagas';

const Registration = () => {
  const dispatch = useDispatch();
  // Input log/pas
  const [logInput, setLogInput] = useState('');
  const [pasInput, setPasInput] = useState('');

  // Server response
  const [servResp, setServResp] = useState();

  // Modal screen
  const [isModal, setIsModal] = useState(false);

  const validation = (AStr) => {
    AStr = AStr.replace(/[\s\-\(\)]/g, '');
    return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
  };

  const autorizationUser = async () => {
    // setIsModal(!isModal);
    // try {
    //   let response = await fetch('https://dev.campanile.com.ua/api/v1/courier/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       'phone': `${logInput}`,
    //       'password': `${pasInput}`,
    //     }),
    //   });
    //   let json = await response.json();
    //   setServResp(json);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setIsModal(!isModal);
    // }
  };

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
        <TextInput
          style={styles.registrInput}
          value={logInput}
          onChangeText={setLogInput}
          placeholder="Номер телефона"
        />
        {logInput.length !== 13 ? (
          <Text style={{color: 'red'}}>Не правильный номер</Text>
        ) : null}
        <TextInput
          style={styles.registrInput}
          value={pasInput}
          onChangeText={setPasInput}
          placeholder="Пароль"
        />
        {pasInput.length < 6 ? (
          <Text style={{color: 'red'}}>Не соответствующий пароль</Text>
        ) : null}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            dispatch({type: ActionTypes.AUTORIZATION});
            if (validation(logInput, pasInput)) {
              // autorizationUser()

            }
          }}
        >
          <Text style={styles.text}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
      <Modal style={styles.modalWindow} visible={isModal} presentationStyle='fullScreen' animationType="slide">
        <ActivityIndicator style={styles.spinner} size="large" color="#141A1C"/>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageWrap: {
    marginTop: 50,
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
    fontWeight: '800',
    fontSize: 35,
  },
  registrWrap: {
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 20,
  },
  registrInput: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 35,
    fontSize: 20,
    paddingLeft: 20,
  },
  signInButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#141A1C',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#989BD2',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpButton: {
    width: '100%',
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
  modalWindow: {
    backgroundColor: '#000000',
    opacity: 0.25,
  },
  spinner: {
    marginVertical: '100%',
  },
});

export default Registration;
