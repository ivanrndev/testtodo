import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const SearchUsers = () => {
  const [textRequest, setTextRequest] = useState('');
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const getFindUsers = async () => {
    setIsActive(true);
    try {
      let response = await fetch(
        `https://api.github.com/search/users?q=${textRequest}`,
      );
      let json = await response.json();
      setItems(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setIsActive(false);
    }
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerTitle}>Поиск</Text>
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.inputWrap}>
          <Text style={styles.text}>Введите имя пользователя:</Text>
          <TextInput
            style={styles.input}
            placeholder="Поиск..."
            value={textRequest}
            onChangeText={setTextRequest}
          />
          {
            textRequest.length < 1 ? <Text>Заполните поле ввода!!</Text> : null
          }
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (textRequest) getFindUsers();
            }}>
            <Text style={styles.buttonText}>Поиск</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.usersList}>
          {!isActive ? (
            items.map((item, index) => {
              return (
                <View key={index}>
                  <Text>
                    Логин: {item.login} - Номер: {item.id}
                  </Text>
                </View>
              );
            })
          ) : (
            <View>
              <ActivityIndicator size="large" color="#141A1C" />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
  headerWrap: {
    width: '100%',
    height: 80,
    backgroundColor: '#141A1C',
    borderRadius: 20,
  },
  headerTitle: {
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
  inputWrap: {},
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#4F4F4F',
  },
  input: {
    width: '100%',
    height: 70,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#141A1C',
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  usersList: {
    flex: 1,
  },
});

export default SearchUsers;
