
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,FlatList, TextInput } from 'react-native';
import Footer from './components/Footer';

import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {

  const [todo, setTodo] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);
  

  const pressHandler = task => {
    task.checked=true;
    setTasksRemaining(todo.filter(i => i.checked !== true).length);
  };

  const handleLongPress = item => {
    setTodo(todo.filter(i => i !== item));
    pressHandler(item);

  };

  const addTodo = text => {
    setTodo([
      ...todo,
      {id: Math.random().toString(),textValue: text, checked: false},
    ]);

    setTasksRemaining(tasksRemaining +1);
  };

  const renderTodo = ({item}) => {
    return (
      <TouchableHighlight onLongPress={() => handleLongPress(item)} onPress={() => pressHandler(item)}>
        <TodoItem todo={item} />
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Header remaining={tasksRemaining} />
      <View style={styles.flatlist}>
          <FlatList data={todo} renderItem={renderTodo} />
        </View>
      <Footer onAddTodo={addTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27272b',
  },
  flatlist:{
    flex:1
  },  
});
