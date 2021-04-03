import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoCreator from './TodoCreator.js'
import Items from './Items.js';
//step 1, convert function app to class

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], //populated with data from API
      editUserInput: "",
    }
  }

  handleChange(event) {
    //console.log(event); //Very important!
    
    this.setState({editUserInput: event.target.value});
  }


  //move to child components
  componentDidMount(){
    fetch("http://localhost:3001/api/items")
    .then(response => response.json())
    .then(responseJsonData => {
      //console.log(responseJsonData);
      this.setState({items: responseJsonData})
      
    })
  }
  
  updateList(newList){
    this.setState({items: newList})
  }



  render() {
  //const { items } = this.state;
    return (
    <div className="App">
      <TodoCreator                
                updateList={this.updateList.bind(this)}/>
      <Items items={this.state.items}
             completed={this.state.items.completed}
             updateList={this.updateList.bind(this)}
             handleChange={this.handleChange.bind(this)}
             editUserInput={this.state.editUserInput}
      />  
      {/*this.state.items*/}
      
    
    
    
    
    
    </div>
    );
  }
}
export default App;

/*
//map function
{this.state.items.map(item => <li key={item.id}>{item.content}</li>)  }

*/

//handleSubmit is called on TodoCreator with this.handleSubmit.bind(this)
  // handleSubmit(event, newText) {
  //   event.preventDefault();

  //   if (newText === "") {
  //     return;
  //   }
  //   // stop the refresh
  //   console.log(this.state.newUser);
  //   this.setState({userText: newText});
  // }
  //for todo creator to pass up

  {/* <h1>{this.state.userText}</h1> */}

  // <Items items={this.state.items.map(item => <li key={item.id}>{item.content}</li>)  } /> 