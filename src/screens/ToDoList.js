import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo} from '../actions/ToDoAction';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Todo from '../components/ToDoComponent';

const ToDoList = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState(' ');

  const todo = useSelector(state => state.todoReducer.items);
  return (
    <View style={{marginTop: 60}}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          onChangeText={setTextInput}
          value={textInput}
          placeholder="Useless placeholder"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addToDo(textInput));
            setTextInput('');
          }}>
          <Text>Add ToDo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todo.map((item, index) => (
          <Todo item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    borderWidth: 1,
    width: 70,
    height: 30,
    marginRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToDoList;
