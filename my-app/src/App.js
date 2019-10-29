import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/userCard';
import SearchUserForm from './components/form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'MelodyRackham',
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      console.log(this.state.usersList);
      this.fetchUsers();
    }
  }

  fetchUsers = (user = `${this.state.username}`) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(resp => {
        console.log(resp);
        this.setState({
          users: [...this.state.users, resp.data],
        });
      })
      .catch(err => {
        console.log('whoopsie, you got an error: ', err);
      });
  };

  addUser = (e, user) => {
    const newUser = user;
    this.setState({
      username: newUser,
    });
  };

  render() {
    return (
      <div className='container'>
        <h1> GitHub User Cards </h1>
        <SearchUserForm addUser={this.addUser} />
        <div className='users'>
          {this.state.users.map((item, index) => {
            return (
              <div className='userCards' key={index}>
                <UserCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

/* Users to put in form: 

jasminekh96
Memitaru
LoganMReber
HarrisonMS
JustinTrombley96

*/
