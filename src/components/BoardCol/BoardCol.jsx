import React, { Component } from 'react';
/*import PropTypes from 'prop-types';*/

class BoardItem extends Component {

  render() {
    return (
      <div className="BoardItem">
              <textarea placeholder="Sample Text for the component is here and preparing to become dynamic."></textarea>
              <div className="FunctionNav">
                <button>&larr;</button>
                <button onClick={this.delete}>x</button>
                <button>&rarr;</button>
              </div>
      </div>
    )};
}


function BoardCol(props) {
    return (
      <div className={props.cat}>
        <h2>{props.title}</h2>
        <button onClick={props.add} className="addButton">+</button>
        <BoardItem
            key={props.items}
            delete={props.delete}
        />
      </div>
    );

}

export default BoardCol;
