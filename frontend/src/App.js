import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'
import Recommendations from './Components/Recommendations'
import SearchBar from './Components/SearchBar'
import ItemSelect from './Components/ItemSelect'


export default function App() {
  return <Application />
}


class Application extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        mealType: null,
        nutrient: null,
        ingredient: null,
        time: null,
        portion: null,
        taste: null 
      }
    }
    setItemType = (itemType, itemTypeName)=>{
        if(itemType === "mealtype"){
          if(this.state.mealType === null){
            this.setState({
              mealType: itemTypeName
            })
          }
          else{
            this.setState({
              mealType: null
            })
          }
        }
        if(itemType === "nutrient"){
          if(this.state.nutrient === null){
            this.setState({
              nutrient: itemTypeName
            })
          }
          else{
            this.setState({
              nutrient: null
            })
          }
        }
        if(itemType === "ingredient"){
          if(this.state.ingredient === null){
            this.setState({
              ingredient: itemTypeName
            })
          }
          else{
            this.setState({
              ingredient: null
            })
          }
        }
        if(itemType === "time"){
          if(this.state.time === null){
            this.setState({
              time: itemTypeName
            })
          }
          else{
            this.setState({
              time: null
            })
          }
        }
        if(itemType === "portion"){
          if(this.state.portion === null){
            this.setState({
              portion: itemTypeName
            })
          }
          else{
            this.setState({
              portion: null
            })
          }
        }
        if(itemType === "taste"){
          if(this.state.taste === null){
            this.setState({
              taste: itemTypeName
            })
          }
          else{
            this.setState({
              taste: null
            })
          }
        }
    }
    
    render(){
      return (<Router>
                <Routes>
                    <Route path="/" element={<ItemSelect setItemType={this.setItemType} items={this.state}/>} />
                    <Route path="/recipelist" element={<RecipeList/>} />
                    <Route path="/recipe/:id" element={<RecipeDetails/>} />
                    <Route path="/recommendations" element={<Recommendations/>} />
                    <Route path="/search" element={<SearchBar/>} />
                </Routes>
            </Router>)
    }
}