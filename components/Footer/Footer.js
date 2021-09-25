import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './Footer.style';

const Footer = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <SafeAreaView style={styles.container}>
          <TextInput
            placeholder="Yapılacak..."
            value={newTodoItem}
            style={styles.text_input}
            onChangeText={todoInputHandler}
          />

          <View style={styles.seperator}></View>

          <View style={styles.button}>
            <TouchableOpacity>
              <Button
                color="black"
                title="Kaydet"
                onPress={addTodoHandler}></Button>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default Footer;