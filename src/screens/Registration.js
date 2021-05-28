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
import {useDispatch, useSelector} from 'react-redux';
import ActionTypes from '../utils/constants';
import {UserReducer} from '../reducers/userReducer';
import {loading, autorizate, logOut} from '../actions/userActions';

const Registration = () => {
  const dispatch = useDispatch();
  // Input log/pas
  const [logInput, setLogInput] = useState('');
  const [pasInput, setPasInput] = useState('');

  // Input Validation
  const [logValidation, setLogValidation] = useState(true);
  const [pasValidation, setPasValidation] = useState(true);

  // Modal screen
  const [isModal, setIsModal] = useState(false);

  // Selector
  const user = useSelector(state => state.UserReducer);
  console.log('user', user);

  const validation = AStr => {
    AStr = AStr.replace(/[\s\-\(\)]/g, '');
    return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
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
        {!logValidation ? (
          <Text style={{color: 'red'}}>Не правильный номер</Text>
        ) : null}
        <TextInput
          style={styles.registrInput}
          value={pasInput}
          onChangeText={setPasInput}
          placeholder="Пароль"
        />
        {!pasValidation ? (
          <Text style={{color: 'red'}}>Не соответствующий пароль</Text>
        ) : null}
        {user.errorText ? <Text>{user.errorText}</Text> : null}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            if (validation(logInput)) {
              dispatch(loading());
              dispatch({
                type: ActionTypes.AUTORIZATION,
                data: {logInput, pasInput},
              });
            } else {
              setLogValidation(false);
              setPasValidation(false);
            }
          }}>
          <Text style={styles.text}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(loading());
          dispatch({
            type: ActionTypes.LOG_OUT,
          });
        }}>
        <Text>log out</Text>
      </TouchableOpacity>
      {
        <Modal
          style={styles.modalWindow}
          visible={user.userLoading}
          presentationStyle="fullScreen"
          animationType="slide">
          <ActivityIndicator
            style={styles.spinner}
            size="large"
            color="#141A1C"
          />
        </Modal>
      }
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
