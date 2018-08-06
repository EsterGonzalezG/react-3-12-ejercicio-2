import React from 'react';

class PersonDetail extends React.Component {

  render(){

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



      </div>
    );
  }
}

export default PersonDetail;
