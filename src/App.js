import React, { Component } from 'react';
import './App.css';
import BoardCol from './components/BoardCol/BoardCol'


const items = [...Array(3).keys()].map(num => {
  return {
    itemCount: 0
  };
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { itemCount: 0, BoardItems: 0 }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(index) {
    let newItems = this.state.items;
    newItems[index].isVisible = false;
  }
    
  addItem = () => {
      this.setState({ itemCount: this.state.itemCount + 1 });
  }

  delete = () => {
    this.setState({ itemCount: this.state.itemCount - 1 });
  };

  render() {
    return (
    <div className="App">
      <div className="BoardCntr">
          <BoardCol
            cat="cat1"
            title="Went Well"
            add={this.addItem}
            move={this.move}
            delete={this.delete}
            items={this.itemsCount}
          />
          {/*<BoardCol
            cat="cat2"
            title="To Improve"
            add={this.addItem}
            move={this.move}
            delete={this.delete}
          />
          <BoardCol 
            cat="cat3"
            title="Action Items"
            add={this.addItem}
            move={this.move}
            delete={this.delete}
          />*/}
      </div>
    </div>);
  }
}

export default App;
