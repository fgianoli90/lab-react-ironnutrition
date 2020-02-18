import React, { Component } from 'react';
// import AddTodaysFood from './AddTodaysFood.js'



class Foodbox extends Component {
    state = {
        quantity: 0 
    }
    
    // handleSubmit = (event) => {
	
    //     event.preventDefault()
        
    //     Console.log('submit',this.state)
        
    //     this.props.filterTheFood(this.state)
    // }
    
    changeQuantity=(e)=>{
        console.log('enter updateSelection',e.target.value)
        // this.props.updateTheQuantity(e.target.value)
        let quantityUsed=e.target.value
        this.setState({
            quantity: quantityUsed
        })
        
    }
  
    // handleClick=(e)=>{
    //     console.log("handle selection",e.target.name)
    //     let nameOfFood=e.target.name
    //     this.props.selectTheFood(nameOfFood)
    //     // this.state.selected=true
    //     // this.props.updateTheSelection(this.state)
    // }
    
    
    render(){
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={this.props.image} alt="error loading"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                onChange={this.changeQuantity}
                                className="input"
                                type="number" 
                                // value={this.props.quantity}
                                />
                            </div>
                            <div className="control">
                                <button onClick={()=>this.props.addTheList(this.props.name,this.props.calories,this.state.quantity)} className="button is-info" type="text">
                                    Add
                                </button>
                                {/* <AddTodaysFood
                                    propsSelect={this.state}
                                    updateTheSelection={this.updateSelection}
                                /> */}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Foodbox;