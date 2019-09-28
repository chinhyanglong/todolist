import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';


class App extends React.Component{
  constructor(){
    super();
    this.state= { 
      todoItems : [
      {title: 'Đi mua bim bim', isComplete : true},
      {title: 'Đi chợ'},
      {title: 'Đi về'}
    ]
   } 
   }
   onItemClicked(item){
     return (event)=> {
       console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
       this.setState({
         todoItems : [
           ...todoItems.slice(0,index),
           {
             ...item, isComplete: !isComplete
           },
           ...todoItems.slice(index + 1)
         ]
       })
     }

   }
   

   render() {
     const { todoItems } = this.state;
     if(todoItems.length) {
    return (
      <div className="App">
      {
        todoItems.length && todoItems.map((item,index) =>
         <TodoItem 
            key={index} 
            item = {item}
            onClick = {this.onItemClicked(item)} /> 
            )
      }
      {todoItems.length === 0 && 'Nothing here!' }
      </div>
    );
     }
    }
}

export default App;
