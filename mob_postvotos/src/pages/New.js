import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export default class New extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    newPost: '',
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  handlePost = async () => {
    const content = this.state.newPost;
    const author = await AsyncStorage.getItem('@NewsPost:username');
    await api.post('post', {author, content});
    this.goBack();
  };

  handleInputChange = newPost => {
    this.setState({newPost});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="close" size={24} color="#bbb" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.handlePost}>
              <Text style={styles.buttonText}>Add Post</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Coloque o seu Posts na nossa Timeline..."
            placeholderTextColor="#999"
            value={this.state.newPost}
            onChangeText={this.handleInputChange}
            returnKeyType="send"
            onSubmitEditing={this.handlePost}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: '#333',
  },
});
