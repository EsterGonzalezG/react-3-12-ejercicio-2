import React from 'react';
const check=[];
class Ciudad extends React.Component {
  constructor(props){
    super(props);

    this.pasarClick=this.pasarClick.bind(this);
  }
  pasarClick(event){

    let check = event.currentTarget.value;
        
    this.props.filtrarCiudad(check);
  }
  render(){
    return (
      <div className="div__ciudad">
        <h1 className="title__cuidad">Localización</h1>
        <ul className="lista__ciudad">
          {this.props.personas.map((item,index)=>{return(
            <li key={index}>
              <label><input type="checkbox" id="cbox1" value={item.location.city} onClick={this.pasarClick}/>{item.location.city} </label>
            </li>
          )}
        )}
      </ul>
    </div>
  );
}
}

export default Ciudad;
