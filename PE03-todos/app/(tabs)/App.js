import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
    };
  }

  handleInputChange = (text) => {
    this.setState({ inputValue: text });
  };

  addTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      const newTodos = [...todos, inputValue];
      this.setState({ todos: newTodos, inputValue: '' });
      console.log('Added:', inputValue);
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.scroll}>
          <Text style={styles.header}>todos</Text>
          <TextInput
            value={inputValue}
            onChangeText={this.handleInputChange}
            placeholder="What needs to be done?"
            placeholderTextColor="#CACACA"
            style={styles.input}
          />
          <Button title="Submit" onPress={this.addTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    padding: 30,
    paddingTop: 80,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.25)',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
