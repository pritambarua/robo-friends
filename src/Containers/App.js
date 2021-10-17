import './App.css';
import CardList from '../Components/CardList';
import React, {Component} from 'react';
import Scroll from '../Components/Scroll';
import Search from '../Components/Search';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  render(){
    const filteredRobots = this.state.robots.filter(robo => robo.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <Search searchChange = {this.onSearchChange}></Search>
        <Scroll>
        <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }

}

export default App;
