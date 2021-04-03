
import './App.css';
import React from 'react';


class TodoCreator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: ""
        }
    }


handleChange(event) {
    //console.log(event); Very important!
    
    this.setState({userInput: event.target.value});
  }

  
//Post function here
addItem(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: this.state.userInput })
    };
    fetch('http://localhost:3001/api/items', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        //run get request
        this.refreshPage();
        })          
  }




  //get request will update this section of the page; will be called at top level.
  refreshPage(){
    fetch("http://localhost:3001/api/items")
    .then(response => response.json())
    .then(responseJsonData => {
      console.log(responseJsonData);
      //this.setState({items: responseJsonData})
      this.props.updateList(responseJsonData);
      
      
    })
  }

  render() {
    //const { items } = this.state;
      return (
      <div className="todo">
              <input type="text" onChange={(event) => this.handleChange(event)}></input>
              <button onClick={() => this.addItem()}>Add Item Here</button>
      
      </div>
      );
    }


}
export default TodoCreator;