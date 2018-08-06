import React from 'react';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
class List extends React.Component {
  render(){
    return (
        <ul className="list">
          {this.props.persons
            .filter(persona=>{
                if (this.props.filtroGender.toLocaleLowerCase()==='male'){
                  return persona.gender.toLocaleLowerCase()===(this.props.filtroGender.toLocaleLowerCase());
                }else if (persona.gender.toLocaleLowerCase().includes(this.props.filtroGender.toLocaleLowerCase())) {
                  return persona.gender.toLocaleLowerCase().includes(this.props.filtroGender.toLocaleLowerCase());
                }
            })

            .filter(ciudad=>{
              return ciudad.location.city.includes(this.props.filtroCity);
            })

            .map((item,index)=>{return(
              <li className="itemList" key={index}>
                <Link to={`/person/${index}`}>
                <ItemList persons={item} />
                </Link>
              </li>
            )}
          )}
        </ul>
  );
}
}

export default List;
