import React, { Component } from 'react';


class Foodbox extends Component {
    // state = {
    //     Food: [...this.Foodbox]
    // }
    
    // handleSubmit = (event) => {
	
    //     event.preventDefault()
        
    //     Console.log('submit',this.state)
        
    //     this.props.filterTheFood(this.state)
    // }
    
    // handleChange=(e)=>{
        
    //     this.setState({
    //         Food: e.target.name
    //     })
    // }


    render() {
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={this.props.image} />
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
                                className="input"
                                type="number" 
                                value={this.props.quantity}
                                />
                            </div>
                            <div className="control">
                                <button onClick={this.handleSubmit} className="button is-info">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Foodbox;