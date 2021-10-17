import React, {Component} from "react";

class Search extends Component{
    constructor(){
        super();
    }

    render(){
        return(
        <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={this.props.searchChange}
        />
      </div>);
    }
}

export default Search;