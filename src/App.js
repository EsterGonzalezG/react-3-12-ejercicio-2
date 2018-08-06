import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PersonDetail from './components/PersonDetail';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filtroGender:'',
      filtroCity:[],
      persons:[]
    }
    this.searchFechNewPeople();

    this.filtrarSexo = this.filtrarSexo.bind(this);
    this.filtrarCiudad = this.filtrarCiudad.bind(this);
  }

  searchFechNewPeople(){
    fetch('https://randomuser.me/api/?results=50')
    .then(response=> {
      return response.json();
    })
    .then(json => {
      const person = json.results;
      this.setState({
        persons: person
      });
    });
  }
  filtrarSexo(sexo){
    this.setState({
      filtroGender:sexo
    });
  }
  filtrarCiudad(filtro){

    let arraySexo=[this.state.filtroCity];
    if (arraySexo.includes(filtro) === true) {
      let positionToRemove = arraySexo.indexOf(filtro);
      arraySexo.splice(positionToRemove, 1);

      this.setState({
        filtroCity:arraySexo
      });

    } else {
      
      this.setState({
        filtroCity:filtro
      });
      console.log(arraySexo);
    }


  }



  render(){
    return (
      <div className="App">

        <Switch>
           <Route exact path='/' render={()=>  <Home funcionClick={this.filtrarSexo} persons={this.state.persons} filtroGender={this.state.filtroGender} filtroCity={this.state.filtroCity} personas={this.state.persons} filtrarCiudad={this.filtrarCiudad}/>  } />
           <Route path='/person/:id' render={props=> <PersonDetail match={props.match} persons={this.state.persons} /> } />
         </Switch>
      </div>
    );
  }
}

export default App;
