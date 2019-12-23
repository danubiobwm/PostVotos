import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../services/api';

import logo from '../img/logo.svg';
import './TimeLine.css';
import Post from '../components/Post';

export default class TimeLine extends Component {
  state = {
    posts: [],
    newPost: '',
  };

  async componentDidMount() {
    this.subscribeToEvents();
    const response = await api.get('posts');
    this.setState({ posts: response.data });
  }

  handleInputChange = e => {
    this.setState({ newPost: e.target.value });
  };

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');
    io.on('post', data => {
      this.setState({ posts: [data, ...this.state.posts] });
    });
    io.on('voto', data => {
      this.setState({
        posts: this.state.posts.map(post =>
          post._id === data._id ? data : post
        ),
      });
    });
  };

  handleNewPost = async e => {
    if (e.keyCode !== 13) return;
    const content = this.state.newPost;
    const author = localStorage.getItem('@NewsPost:username');

    await api.post('post', { content, author });

    this.setState({ newPost: '' });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={85} src={logo} alt="PostNews" />
        <form>
          <textarea
            value={this.state.newPost}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewPost}
            placeholder="Coloque o seu Posts na nossa Timeline..."
          />
        </form>
        <ul className="post-list">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    );
  }
}
