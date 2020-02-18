import React, { Component } from 'react';



class Search extends Component {
    state={
        search: this.Search
        
    }

    handleSubmit=(e)=>{
        console.log('submithandle',this.state)
        e.preventDefault()
        this.props.filterTheFoodList(this.state)
    }
    

    handleChange=(e)=>{
        console.log('change the Search',this.state)
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Search.." name="search"/> 
                    <input type="image" className="searchbutton" name="search" src="https://cdn1.iconfinder.com/data/icons/modern-flat-app-gui-1/50/Search-512.png" alt="Search"/>
                </form>
            </div>
        )
    }
}

export default Search;