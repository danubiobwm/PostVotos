import React, { Component } from 'react';

import logo from '../img/logo.svg';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    if (!username.length) return;

    localStorage.setItem('@NewsPost:username', username);

    this.props.history.push('/posts');
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={logo} alt="PostNews" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome do Author"
          />
          <button typer="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
