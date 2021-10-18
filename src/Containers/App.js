import './App.css';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../action';
import CardList from '../Components/CardList';
import React, {Component} from 'react';
import Scroll from '../Components/Scroll';
import Search from '../Components/Search';

const mapStateToProps = (state) =>{
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component{

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
    const {robots, searchField, onSearchChange, isPending} = this.props;
    const filteredRobots = robots.filter(robo => robo.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <Search searchChange = {onSearchChange}></Search>
        <Scroll>
          {isPending ? <h1> Loading </h1> : 
          <CardList robots={filteredRobots}></CardList>
          }
        </Scroll>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
