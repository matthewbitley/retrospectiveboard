import React from 'react';

function BoardItem(props) {

    return (
      <div className="BoardItem">
              <form className="flexform" onSubmit={(e) => props.submit(e)}>
                <textarea value={props.userInput} onChange={e => props.handleChange(e)} placeholder="Enter Text Here"></textarea>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
              <p>{props.text}</p>
              <div className="FunctionNav">
                <button onClick={props.move} className="leftbtn">&larr;</button>
                <button onClick={() => {
                  props.delete(props.category, props.index)
                  }}>x</button>
                <button onClick={props.move} className="rightbtn">&rarr;</button>
              </div>
      </div>
    );
}

function BoardCol(props) {
    return (
      <div className={props.cat}>
        <h2>{props.title}</h2>
        <button onClick={props.add} className="addButton">+</button>
        {props.data.map((item,index)=>{
        const key = "Boarditem-" + props.cat + '-'  + index;
        return (
        <BoardItem
            index={index}
            key={key}
            delete={props.delete}
            move={props.move}
            category={props.category}
            data={props.data}
            submit={props.submit}
            userInput={props.userInput}
            handleChange={props.handleChange}
        />
        )
      })}
      </div>
    );
}

export default BoardCol;