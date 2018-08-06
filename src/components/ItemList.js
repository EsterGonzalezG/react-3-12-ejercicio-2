import React from 'react';

class ItemList extends React.Component {
  render(){
    return (
      <div className="div_container">
        <img className="img" alt={this.props.persons.name.first} src={this.props.persons.picture.medium}/>
        <div className="div__item">
        <h1 className="title">{this.props.persons.name.first}</h1>
        <p className="text">{this.props.persons.location.city}</p>
        <p className="text">{this.props.persons.dob.age}</p>
        </div>
      </div>
    );
  }
}

export default ItemList;
