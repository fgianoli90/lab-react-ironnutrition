import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import Foodbox from './Foodbox.js'

console.log(foods)

class App extends Component {
  state = {
      foods,
      foodForm: false
  }
  
  showFoods = () => {
   let foodList= this.state.foods.map((eachFood,i)=>{
      return <Foodbox
        key ={i} {...eachFood}
      />
    })
    return foodList
  }

 toggleFoodForm=()=>{
  this.setState({
    foodForm: !this.stat.foodForm
  })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.toggleFoodForm()
    console.log('submit', this.state)
    let newFoods=[...this.state.foods]
    newFoods.push({name:this.state.name,
    calories: null,
    quantity: 1,
    image:null})
    
    this.setState({
      foods: newFoods
    })

  }

  handleInputChange=(e) => {
    console.log('change',this.state)
    this.setState ({
      [e.target.name]:e.target.value
    })
  }

  showFoodForm=()=>{
    if(this.state.foodForm){
      return (
        <form>
           <input onChange={this.handleInputChange} text="text" name= "food"/>
           <input onChange={this.handleInputChange} text="text" name= "food"/>
           <input onChange={this.handleInputChange} text="text" name= "food"/>
           <input onChange={this.handleInputChange} type="submit" />
        </form>
      )
    } else {
        return ''
    }
    }
  
  // filterFoodList = (e) => {
  //   const filteredList = [...this.state.FoodList]
  //   this.filteredList.filter(food=> food.name.includes(e.value))

  //   this.setState ({
  //     FoodList: filteredList
  //   })
  // }
  
  
  render() {
    console.log(this)
    return (
     
        <div className="App">
        
        <button onClick={this.showNewFoodForm}> Add New </button>
        {this.showFoods()}
        </div>

      );
    } 
  }
  
  
  export default App;
  
  {/* <Foodbox/
  foodProps={this.state.FoodList}
  filterTheFood={this.filterFoodList}
  /> */}