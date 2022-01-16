import React, { Component } from 'react';
import { CardList } from './components/card-list/card-lists.componet';
import './App.scss';

class App extends React.Component {
  constructor(){
    super();


    this.state = {
     monsters: [], 
     searchField:''
    };
  }
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
   }

  render(){
    const monsters = this.state.monsters
   const searchField  = this.state.searchField
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
   return ( 
    <div className ="App">
      <h1>MONSTERS ROLODEX</h1>
      <input type="search" placeholder='Search Monsters' onChange={e => this.setState({searchField: e.target.value} )
    
    } className='input-search-bar'/>
      <CardList monsters = {filteredMonsters} />  
    </div>
      
  ) 
  };
  
}

export default App;

 