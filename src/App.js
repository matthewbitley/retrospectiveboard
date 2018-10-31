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
   addClass: false,
   userInput: ''
  };
 
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  
  addItem = (e, category) => {
    let newCategory =  {...this.state.data};
    newCategory[category].push('');
    this.setState({
      data:newCategory
    })
  }

  handleChange = (e) => {
   this.setState({
      userInput: e.target.value
    });
  }

  submit = (e, category) => {
    e.preventDefault();
    let newCategory = {...this.state.data};
    newCategory[category] = this.state.userInput;
    return this.setState({
          data: newCategory,
          userInput: ""
        });
  };

  move = (e, category, index) => {
    let newCategory =  {...this.state.data};
    newCategory[category].splice(index, 1);
    this.setState({
      data:newCategory
    })
  };

  delete = (category, index) => {
    let newCategory =  {...this.state.data};
    newCategory[category].splice(index, 1);
    this.setState({
      data:newCategory
    })
  };

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
           move={()=>this.move(null,'wentWell')}
           delete={this.delete}
           submit={this.submit}
           data={wentWell}
           handleChange={this.handleChange}
           category="wentWell"
           
         />
          <BoardCol
            cat="cat2"
            title="To Improve"
            add={()=>this.addItem(null,'toImprove')}
            move={()=>this.move(null,'toImprove')}
            delete={this.delete}
            submit={this.submit}
            handleChange={this.handleChange}
            data={toImprove}
            category="toImprove"
          />
          <BoardCol 
            cat="cat3"
            title="Action Items"
            add={()=>this.addItem(null,'actionItems')}
            move={()=>this.move(null,'actionItems')}
            delete={this.delete}
            submit={this.submit}
            handleChange={this.handleChange}
            data={actionItems}
            category="actionItems"
          />
      </div>
    </div>);
  }
}

export default App;