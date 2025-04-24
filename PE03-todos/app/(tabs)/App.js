import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All', // 'All' | 'Active' | 'Complete'
    };
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  submitTodo = () => {
    if (!this.state.inputValue) return;

    const newTodo = {
      title: this.state.inputValue,
      complete: false,
    };

    this.setState(
      (prevState) => ({
        todos: [...prevState.todos, newTodo],
        inputValue: '',
      }),
      () => console.log('Added todo:', newTodo)
    );
  };

  toggleComplete = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    this.setState({ todos: updatedTodos });
  };

  deleteTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  changeType = (type) => {
    this.setState({ type });
  };

  filterTodos = () => {
    const { todos, type } = this.state;
    if (type === 'All') return todos;
    if (type === 'Complete') return todos.filter((todo) => todo.complete);
    if (type === 'Active') return todos.filter((todo) => !todo.complete);
  };

  render() {
    const { inputValue, type } = this.state;
    const filteredTodos = this.filterTodos();

    return (
      <View style={styles.container}>
        <Text style={styles.header}>todos</Text>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={inputValue}
          onChangeText={this.inputChange}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submitTodo}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <ScrollView>
          {filteredTodos.map((todo, index) => (
            <View key={index} style={styles.todoRow}>
              <Text
                style={todo.complete ? styles.todoDone : styles.todoItem}
              >
                {todo.title}
              </Text>
              <View style={styles.buttonGroup}>
                <Button
                  title="Done"
                  color="green"
                  onPress={() => this.toggleComplete(index)}
                />
                <Button
                  title="Delete"
                  color="red"
                  onPress={() => this.deleteTodo(index)}
                />
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.tabBar}>
          {['All', 'Active', 'Complete'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => this.changeType(tab)}>
              <Text
                style={type === tab ? styles.selectedTab : styles.tab}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    color: 'rgba(175, 47, 47, 0.25)',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  submitBtn: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  submitText: {
    fontWeight: 'bold',
  },
  todoItem: {
    fontSize: 18,
    color: '#000',
  },
  todoDone: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  todoRow: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },
  tab: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
