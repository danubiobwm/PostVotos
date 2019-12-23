import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../services/api';

export default class Post extends Component {
  handleLike = () => {
    const {_id} = this.props.post;

    api.post(`votos/${_id}`);
  };

  render() {
    const {post} = this.props;
    return (
      <View stye={styles.container}>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <TouchableOpacity
          onPress={this.handleLike}
          style={styles.likeButton}
          color="#999">
          <Icon name="ios-heart-empty" size={20} />
          <Text style={styles.likeText}>{post.likes}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2022',
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1C2022',
    marginVertical: 10,
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeText: {
    color: '#999',
    marginLeft: 5,
  },
});
