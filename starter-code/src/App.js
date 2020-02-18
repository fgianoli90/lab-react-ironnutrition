import React, { Component } from 'react';
import './App.css';
import foods from './foods.json' //import food info array of Objects
import Foodbox from './Foodbox.js' //import component containing html for each foodbox
import Search from './Search.js'
import AddTodaysFood from './AddTodaysFood';

console.log(foods)

class App extends Component {
  state = {
      foods, //same as foods: [...foods]; takes array of object info
      foodForm: false, //boolean 
      todaysFood: [],
      totalCalories: 0
  }
  
  //returns foodlist to render in App.js 
  showNewFoodForm = () => {
  // console.log("enter showNewFoodForm")
  //Declare new food list that copies foods info in this state and for each food item passes key and object to Foodbox component 
   let foodList= this.state.foods.map((eachFood,i)=>{
      //Returns a box with info of image, name, calories, quantity to add to render on App.js
      return <Foodbox
        key ={i} {...eachFood}
        // selectTheFood={this.selectFood}
        addTheList={this.addList}
      />
    })
    console.log('food',foodList)
    return foodList
    // console.log('abcdefg',foodList[1].selected)
    // return foodList.map((eachFood)=>{
    //   eachFood.selected
    // })
  }
//This method is called on two click events when clicking to 'add button' it turns foodForm true displaying the showForm for new food entry
//when 'submit button' clicked reutrns boolean foodForm ack to false, so to not display new entry form
 toggleFoodForm=()=>{
   
  this.setState({
    foodForm: !this.state.foodForm
  })
  }

//This method is called upon click event on 'submit button' 
  handleFormSubmit = (e) => {
    
    e.preventDefault()                  //stops page from refreshing and erasing the inputs
    this.toggleFoodForm()               //makes boolean value for foodForm false again disappearing foodForm
    //console.log('submit', this.state) //if uncommented shows the inputs from the form as properties of this state i.e. name: [input value], calories: [input value]
    let newFoods=[...this.state.foods]  //copies this states food list 
    newFoods.unshift(                   //and adds properties as a single object
    {name:this.state.name,
    calories: this.state.calories,
    quantity: 1,
    image:this.state.image})
    
    
    this.setState({
      foods: newFoods                   //resets foods array with new object includes
    })

  }

  handleInputChange=(e) => {            //called in the input boxes shown upon add new clicked event
    // console.log('change',this.state)    //when any change occurs in input the setState is refreshed
    this.setState ({                    //adds all inputs to state as a property with "name" which is passed in input and "value" entered
      [e.target.name]:e.target.value
    })
  }

//This method calls on to either return form for new entry or reutrn nothing based on click event selected and foodForm boolean value
  showFoodForm=()=>{
//  console.log("enter showFoodForm")
    if(this.state.foodForm){
      // console.log("enter return1 show form")
      return (        
        <form>
           <input onChange={this.handleInputChange} type="text" name= "name" placeholder="type name of food"/>
           <input onChange={this.handleInputChange} type="text" name="calories" placeholder="calories per each unit"/>
           <input onChange={this.handleInputChange} type="number" name="quanity" value="1" />
           <input onChange={this.handleInputChange} type="text"  name="image" placeholder="paste url link of image" />
           <input onClick={this.handleFormSubmit} type="submit" />
        </form>
      )
    } else {
      // console.log("enter return2 show nothing")
        return ''
    }
    }
  
  filterFoodList = (event) => {
    // console.log("enter filter foods",event)
    let searchFor=event.search
    let arrayFoods = [...foods]
    let filteredList=arrayFoods.filter(eachItem=> {
      return eachItem.name.toLowerCase().includes(searchFor.toLowerCase())
    })
    // console.log(filteredList)

    this.setState ({
      foods: filteredList
    })
  }
  
  addList=(name,calories,quantity)=>{
    console.log('enter addList',name,calories,quantity)
    let sumOfCals=this.state.totalCalories
    let newFood={
      name: name,
      calories: calories,
      quantity: Number(quantity)
    }
    let todaysFoodCopy=[...this.state.todaysFood]
    todaysFoodCopy.push(newFood)
    sumOfCals=sumOfCals+calories
    this.setState({
      todaysFood: todaysFoodCopy,
      totalCalories: sumOfCals
    })
    }
     
  //Always refreshes on any events i.e. change, click
  render() {
  
    console.log("render App")
    console.log('selectedItem',this.state.selectedItem)
    return (

        <div className="App">
          <Search 
          foodProps={this.state.foods}
          filterTheFoodList={this.filterFoodList}/>
          <button onClick={this.toggleFoodForm}> Add New </button>
            {this.showFoodForm()}    {/*shows depending on this state foodForm boolean value*/}
          <div className="foodList">
            <div className="showFoodList">
            {this.showNewFoodForm()} {/*method that calls for foodbox component for each item on the foodlist & is dynamic so when new food entered App will render again to display foodlist*/}
            </div>
            <div>
              <h2 className="TodaysFood">Today's Food</h2>
              <div>
                <ul>
                 <AddTodaysFood
                   selectedProps={this.state.todaysFood}
                 />
                </ul>
              </div>

              <h3 className="TotalCalories">Total Calories: {this.state.totalCalories}</h3>
            </div>
          </div>
        </div>

      )
    }
  }

  
  export default App;
 