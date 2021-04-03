import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item.js'







const Items = props => { 
//called from item component to make a patch request to api
    function updateItem(id){
        console.log(id);
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "completed": true })
        };
        fetch('http://localhost:3001/api/items/' + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                
            //run get request
            refreshPage();
            });
    }
   
    function refreshPage(){
        fetch("http://localhost:3001/api/items")
        .then(response => response.json())
        .then(responseJsonData => {
          
          
          //props.setState({items: responseJsonData})
          props.updateList(responseJsonData);
        })
      }

//Test this to edit items
function editItem(id){
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: props.editUserInput })
    };
    fetch('http://localhost:3001/api/items/' + id, requestOptions)
        .then(response => response.json())
        .then(data => {
        console.log(props.editUserInput)    
        //run get request
        refreshPage();
        })          
  }      

return (
<div className="todo">

{props.items.map(item => 
<Item key={item.id} 
      item={item} 
      completed={item.completed}    
      updateItem={updateItem.bind(this)}
      refreshPage={refreshPage.bind(this)}
      editItem={editItem.bind(this)}
      handleChange={props.handleChange.bind(this)} 
      />)}



</div>

);
}

//exporting const Items
export default Items;

{/* <Items items={this.state.items.map(item => <li key={item.id}>{item.content}</li>)  } />  */}

{/* <Item item={props.items}></Item> */}