import React, { Component } from 'react';
import './App.css';
import BoardCol from './components/BoardCol/BoardCol'

class App extends Component {

  state = {
   data:{
     wentWell:[],
     toImprove:[],
     actionItems:[]
   },
   addClass: false
  };
 
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  
  addItem = (userInput = '', activity) => {
    let newActivity =  {...this.state.data};
    newActivity[activity].push('');
    this.setState({
      data:newActivity
    })
  }

  delete = (userInput = '', activity) => {
    let newActivity =  {...this.state.data};
    newActivity[activity].pop('');
    this.setState({
      data:newActivity
    })
  }

  render() {
    const {wentWell,toImprove,actionItems} = this.state.data;
    let boardClass = ["BoardCntr"];
    if(this.state.addClass) {
      boardClass.push('MobLayout');
    }
    return (
    <div className="App">
      <div className="btn-cntr"><button onClick={this.toggle.bind(this)} className="ChangeLayout">Change Layout</button></div>
      <div className={boardClass.join(' ')}>
           <BoardCol
           cat="cat1"
           title="Went Well"
           add={()=>this.addItem(null,'wentWell')}
           move={this.move}
           delete={this.delete}
           data={wentWell}
         />
          <BoardCol
            cat="cat2"
            title="To Improve"
            add={()=>this.addItem(null,'toImprove')}
            move={this.move}
            delete={this.delete}
            data={toImprove}
          />
          <BoardCol 
            cat="cat3"
            title="Action Items"
            add={()=>this.addItem(null,'actionItems')}
            move={this.move}
            delete={this.delete}
            data={actionItems}
          />
      </div>
    </div>);
  }
}

export default App;