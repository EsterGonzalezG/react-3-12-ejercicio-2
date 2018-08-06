import React from 'react';
import Ciudad from './Ciudad';
import Inputs from './Inputs';
import List from './List';
class Home extends React.Component {
  render(){
    return (
      <div>
        <Inputs funcionClick={this.props.funcionClick} />
        <div className="app2">
        <List persons={this.props.persons} filtroGender={this.props.filtroGender} filtroCity={this.props.filtroCity} />
        <Ciudad personas={this.props.persons} filtrarCiudad={this.props.filtrarCiudad} filtroCity={this.props.filtroCity}/>
      </div>
    </div>
    );
  }
}

export default Home;
