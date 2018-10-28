import React, { Component } from 'react';

class BoardItem extends Component {
  render() {
    return (
      <div className="BoardItem">
              <textarea placeholder="Enter Text Here"></textarea>
              <div className="FunctionNav">
                <button className="leftbtn">&larr;</button>
                <button onClick={this.delete}>x</button>
                <button className="rightbtn">&rarr;</button>
              </div>
      </div>
    )};
}


function BoardCol(props) {
    return (
      <div className={props.cat}>
        <h2>{props.title}</h2>
        <button onClick={props.add} className="addButton">+</button>
        {props.data.map((item,idata)=>{
        const key = "Item-" + idata;
        return (
        <BoardItem
            key={key}
            delete={props.delete}
        />
        )
      })}
      </div>
    );

}

export default BoardCol;
