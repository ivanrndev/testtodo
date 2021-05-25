import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const VerificationRegistration = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.headerWrap}>
        <Text style={styles.titleHeader}>Восстановление пароля</Text>
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.topWrap}>
          <View style={styles.inputWrap}>
            <Text style={styles.title}>Изменить пароль</Text>
            <Text style={styles.text}>Придумайте новый пароль и повторите его. После этого войдите в систему заново.</Text>
            <TextInput style={styles.input} placeholder='Пароль'/>
            <TextInput style={styles.input} placeholder='Повторите пароль'/>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View style={{ flex: 1}}>
    //   <View style={{ backgroundColor: 'red', height: 100, alignItems: 'center', justifyContent: 'center'}}>
    //     <Text>header</Text>
    //   </View>
    //   <View style={{ flex: 1, backgroundColor: 'blue', marginHorizontal: 20}}>
    //     <View style={{ flex: 1 }}>
    //       <Text>content</Text>
    //     </View>
    //     <TouchableOpacity style={{ backgroundColor: 'grey'}}>
    //       <Text>button</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
  topWrap: {
    flex: 1,
    width: '100%',
  },
  headerWrap: {
    position: 'relative',
    width: '100%',
    height: 100,
    marginTop: 0,
    backgroundColor: '#141A1C',
    borderRadius: 20,
  },
  titleHeader: {
    color: 'white',
    marginTop: 40,
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 20,
  },
  bodyWrap: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputWrap: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    color: '#4F4F4F',
  },
  input: {
    height: 70,
    width: '100%',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 20,
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    // width: '100%',
    backgroundColor: '#141A1C',
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default VerificationRegistration;
