import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {delToDo, createToDo, checkToDo} from '../actions/ToDoAction';
import {useDispatch} from 'react-redux';

const ToDoComponent = props => {
  const dispatch = useDispatch();
  const [action, setAction] = useState(true);
  const [text, changeText] = useState();
  return (
    <View style={styles.wrap}>
      <View style={styles.titleWrap}>
        {action ? (
          <Text style={styles.text}>{props.item.title}</Text>
        ) : (
          <TextInput style={styles.input} onChangeText={changeText}>
            {props.item.title}
          </TextInput>
        )}
        <TouchableOpacity
          style={[
            styles.check,
            {backgroundColor: props.item.isActive ? 'black' : 'white'},
          ]}
          onPress={() => {
            dispatch(checkToDo(props.index));
          }}
        />
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            action
              ? setAction(!action)
              : dispatch(createToDo(text, props.index)),
              setAction(!action);
          }}>
          <Text>CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(delToDo(props.index));
          }}>
          <Text>DEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    margin: 10,
  },
  titleWrap: {},
  buttonWrap: {
    flexDirection: 'row-reverse',
  },
  check: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  button: {
    borderWidth: 1,
    width: 70,
    height: 30,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToDoComponent;
