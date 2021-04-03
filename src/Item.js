import React from 'react';
import ReactDOM from 'react-dom';




const Item = props => { 
//pull props.item from items.js; needs to have a checkbox and a delete button

//if props.items.complted is false, return div class "text"; essentially the task is incomplete
if (JSON.stringify(props.item.completed) === 'false'){ 


return (
<div className="text">


<li>
{props.item.content}
</li>

<input type="checkbox" onClick={() => props.updateItem(props.item.id)}></input>
{JSON.stringify("Completed " + props.item.completed)}

</div>

);
} 
//For the tasks complete, render the css div class "if-complete", which uses a strike-out font type
else {
    return (
        <div className="if-complete">
        
        
        <li>
        {props.item.content}
        </li>
        
        <input type="checkbox" onClick={() => props.updateItem(props.item.id)}></input>
        {JSON.stringify("Completed " + props.item.completed)}

        <input type="text" onChange={(event) => props.handleChange(event)}></input>
        <button onClick={() => props.editItem(props.item.id)}>Edit</button>
        </div>
    );
}






}

export default Item;

// items.map(item => <li key={item.id}>{item.content}</li>)

