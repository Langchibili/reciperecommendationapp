import React from "react"
import MealTypeSelect from "./MealTypeSelect"
import NutrientSelect from "./NutrientSelect"
import IngredientSelect from "./IngredientSelect"
import TimeSelect from "./TimeSelect"
import PortionSizeSelect from "./PortionSizeSelect"
import TasteTypeSelect from "./TasteTypeSelect"
import ShowSelected from "./ShowSelected"
import Recommendations from "./Recommendations"

export default class ItemSelect extends React.Component{
    renderItemSelect = ()=>{
        const items = this.props.items
        console.log(items)
        if(items.mealType === null) return <MealTypeSelect setItemType={this.props.setItemType}/>
        if(items.nutrient === null) return <NutrientSelect setItemType={this.props.setItemType}/>
        if(items.ingredient === null) return <IngredientSelect setItemType={this.props.setItemType}/>
        if(items.time === null) return <TimeSelect setItemType={this.props.setItemType}/>
        if(items.portion === null) return <PortionSizeSelect setItemType={this.props.setItemType}/>
        if(items.taste === null) return <TasteTypeSelect setItemType={this.props.setItemType}/>
        return <Recommendations items={items}/>
    }
    render(){
       return (<div className="section">
                  <div className="row" style={{padding:10}}>
                   {this.renderItemSelect()}
                        <div className="col s4 pad-0">
                        <h5 className="bot-20 sec-tit center ">What You Have Selected</h5>
                        <ShowSelected items = {this.props.items} setItemType={this.props.setItemType}/>
                       </div>
                    </div>
                  </div>)
    }
}