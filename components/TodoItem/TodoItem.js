import React from 'react';
import {View, Text} from 'react-native';
import styles from './TodoItem.style';
const TodoItems = ({todo}) => {
  return (
    <View style={styles.container}>
        {todo.checked === false ? 
      <Text style={styles.text}>{todo.textValue}</Text> :
      
      <Text style={styles.done}>{todo.textValue}</Text>
      }
    </View>
  );
};

export default TodoItems;