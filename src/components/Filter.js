import React from 'react';

class Filter extends React.Component {
  constructor(props){
  super(props);
  this.pasarClick=this.pasarClick.bind(this);
  this.pasarClickInput=this.pasarClickInput.bind(this);
}
pasarClick(event){
  let check = event.currentTarget.value;
  this.props.filtrarCiudad(check);
}
pasarClickInput(event){
const cambio=event.currentTarget.getAttribute('id');
  this.props.funcionClick(cambio);
}
  render(){
    return (
      <div>
        <h2>Filtre por sexo</h2>
        <div className="button_radio">
            <input type="radio" id="female" name="sexo" onClick={this.pasarClickInput}/>
            <label htmlFor="female">Mujer</label>
            <input type="radio" id="male" name="sexo" onClick={this.pasarClickInput}/>
            <label htmlFor="male">Hombre</label>
        </div>
        <div className="div__ciudad">
          <h1 className="title__cuidad">Localización</h1>
          <select onChange={this.pasarClick}>
          <option value="">Seleccione una cuidad</option>
            {this.props.personas.map((item, index)=>{return(
              <option key={index} value={item.location.city}>{item.location.city}</option>
            )}
          )}
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
