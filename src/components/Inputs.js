import React from 'react';

class Inputs extends React.Component {
  constructor(props){
  super(props);

  this.pasarClickInput=this.pasarClickInput.bind(this);
}
pasarClickInput(event){

const cambio=event.currentTarget.getAttribute('id');
  this.props.funcionClick(cambio);
}
  render(){
    return (
    <div className="button_radio">
      <input type="radio" id="female" name="sexo" onClick={this.pasarClickInput}/>
      <label htmlFor="female">Mujer</label>
      <input type="radio" id="male" name="sexo" onClick={this.pasarClickInput}/>
      <label htmlFor="male">Hombre</label>
    </div>
    );
  }
}

export default Inputs;
