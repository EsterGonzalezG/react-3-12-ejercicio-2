import React from 'react';
import {Link} from 'react-router-dom';
class PersonDetail extends React.Component {

  render(){
    if (this.props.persons.length >= 1) {
    return (
        <div>
          <img className="img" alt={this.props.persons[this.props.match.params.id].name.first} src={this.props.persons[this.props.match.params.id].picture.medium}/>
          <div className="div__item">
          <h1 className="title">{this.props.persons[this.props.match.params.id].name.first}</h1>
          <p className="text">{this.props.persons[this.props.match.params.id].location.city}</p>
          <p className="text">{this.props.persons[this.props.match.params.id].dob.age}</p>
          <p>{this.props.persons[this.props.match.params.id].email}</p>
          <p>{this.props.persons[this.props.match.params.id].cell}</p>
          </div>
          <Link to="/" className="button--back">Volver</Link>
      </div>
    );
    }else{
      return(
      <p>¡Estamos trabajando en ello!</p>
      );
    }
  }
}

export default PersonDetail;
