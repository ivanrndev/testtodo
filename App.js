import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './src/reducers/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens Add
import ToDoList from './src/screens/ToDoList';
import FindToDo from './src/screens/FindToDo';
import Registration from './src/screens/Registration';
import VerificationRegistration from './src/screens/VerificationRegistration';
import SearchUsers from './src/screens/SearchUsers';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ToDoList" component={ToDoList} />
          <Tab.Screen name="FindToDo" component={FindToDo} />
          <Tab.Screen name="Registration" component={Registration} />
          <Tab.Screen
            name="VerificationRegistration"
            component={VerificationRegistration}
          />
          <Tab.Screen name="SearchUsers" component={SearchUsers} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
