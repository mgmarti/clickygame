import React from 'react';
import './index.css'
// const CharacterCard = (props) => {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img src={props.image} alt={props.name} />
//       </div>
//     </div>
//   );
// }

class CharacterCard extends React.Component {
  render(){
    return (
    <div className="card">
      <div className="img-container">
        <img src={this.props.image} alt={this.props.name} width={this.props.width} />
      </div>
    </div>
    )
  }
}

                
export default CharacterCard;