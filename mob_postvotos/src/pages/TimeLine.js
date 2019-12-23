import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import socket from 'socket.io-client';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';
import api from '../services/api';
import Post from '../components/Posts';

export default class TimeLine extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'New Post´s',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Icon
          style={{marginRight: 20}}
          name="add-circle-outline"
          size={24}
          color="#000"
        />
      </TouchableOpacity>
    ),
  });

  state = {
    posts: [],
  };

  //
  async componentDidMount() {
    this.subscribeToEvents();

    const response = await api.get('posts');

    this.setState({posts: response.data});
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');
    io.on('post', data => {
      this.setState({posts: [data, ...this.state.posts]});
    });
    io.on('voto', data => {
      this.setState({
        posts: this.state.posts.map(post =>
          post._id === data._id ? data : post
        ),
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.posts}
          keyExtractor={post => post._id}
          renderItem={({item}) => <Post post={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
