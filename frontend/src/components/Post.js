import React, { Component } from 'react';
import like from '../img/like.svg';
import api from '../services/api';
import './Post.css';

export default class Post extends Component {
  /* votos */
  handleLikes = async () => {
    const { _id } = this.props.post;

    await api.post(`votos/${_id}`);
  };

  render() {
    const { post } = this.props;

    return (
      <li className="post">
        <strong>{post.author}</strong>
        <p>{post.content}</p>
        <button type="button" onClick={this.handleLikes}>
          <img src={like} alt="votos" />
          {post.likes}
        </button>
      </li>
    );
  }
}
