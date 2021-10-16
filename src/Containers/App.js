import './App.css';
import CardList from '../Components/CardList';
import React, {Component, useState, useEffect} from 'react';
import Scroll from '../Components/Scroll';
import Search from '../Components/Search';

function App(){
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=> response.json())
       .then(users => {setRobots(users)});
  }, []);

    const filteredRobots = robots.filter(robo => robo.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <Search searchChange = {onSearchChange}></Search>
        <Scroll>
        <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
}

export default App;
