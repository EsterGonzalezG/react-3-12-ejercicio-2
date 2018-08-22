import React from 'react';
import Filter from './Filter';
import List from './List';
class Home extends React.Component {
  render(){
    return (
      <div>
        <Filter funcionClick={this.props.funcionClick} personas={this.props.persons} filtrarCiudad={this.props.filtrarCiudad} filtroCity={this.props.filtroCity} />
        <List persons={this.props.persons} filtroGender={this.props.filtroGender} filtroCity={this.props.filtroCity} />
    </div>
    );
  }
}

export default Home;
