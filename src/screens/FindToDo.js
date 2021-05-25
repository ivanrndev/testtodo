import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Todo from '../components/ToDoComponent';

const FindToDo = () => {
  const todo = useSelector(state => state.todoReducer.items);
  const [finderText, setFinderText] = useState();

  // const findItem = title => {
  //   return todo.map((item, index) => {
  //     if (item.title == title) {
  //       return <Todo item={item} index={index} key={index} />;
  //     }
  //   });
  // };

  return (
    <View style={{marginTop: 60}}>
      <TextInput
        style={styles.input}
        placeholder="Find"
        onChangeText={setFinderText}
        value={finderText}
      />
      <TouchableOpacity
        onPress={() => {
          setFinderText('');
        }}>
        <Text>Find ToDo</Text>
      </TouchableOpacity>
      <ScrollView>
        {/*{findItem(finderText) ? findItem(finderText) : <Text>Not Found</Text>}*/}
        {}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default FindToDo;
