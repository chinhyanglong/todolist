import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';


class App extends React.Component{
  constructor(){
    super();
    this.todoItems = [
      {title: 'Đi mua bim bim', isComplete : true},
      {title: 'Đi chợ'},
      {title: 'Đi về'}
    ] ;
   }
   render() {
    return (
      <div className="App">
      {
        this.todoItems.map((item,index) => <TodoItem key={index} item = {item}/> )
      }
      </div>
    );
    }
}

export default App;
