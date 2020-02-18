import React, { Component } from 'react';

class AddTodaysFood extends Component {
        
                
    render() {
        console.log('idk addtolist',this.props.selectedProps)
        return (
            <div>{this.props.selectedProps.map(eachItem=> {
              return <li>{eachItem.quantity} {eachItem.name} = {eachItem.quantity*eachItem.calories}</li>})}
            </div>
        );
    }
}

export default AddTodaysFood;