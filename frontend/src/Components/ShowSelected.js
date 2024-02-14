import React from "react"

export default class ShowSelected extends React.Component{
    
    render(){
       const items = this.props.items

       const showMealType = ()=>{
        if(items.mealType !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'#FF6347',fontWeight:'900'}}>Meal Type</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.mealType}</span><br/>
                  <button onClick={()=>{this.props.setItemType('mealtype',null)}}>Change Meal Type</button>
                </div>
            )
        }
        else{
            return <></>
        }
       }
       const showNutrient = ()=>{
        if(items.nutrient !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'#7D3C98',fontWeight:'900'}}>Main Nutrient</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.nutrient}</span><br/>
                  <button onClick={()=>{this.props.setItemType('nutrient',null)}}>Change Main Nutrient</button>
                </div>
            )
        }
        else{
            return <></>
        }
       }
       const showIngredient = ()=>{
        if(items.ingredient !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'green',fontWeight:'900'}}>Main Ingredient</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.ingredient}</span><br/>
                  <button onClick={()=>{this.props.setItemType('ingredient',null)}}>Change Main Ingredient</button>
                </div>
            )
        }
        else{
            return <></>
        }
       }
       const showTime= ()=>{
        if(items.time !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'#FFA500',fontWeight:'900'}}>Cook Time</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.time}</span><br/>
                  <button onClick={()=>{this.props.setItemType('time',null)}}>Change Cook Time </button>
                </div>
            )
        }
        else{
            return <></>
        }
       }
       const showPortion = ()=>{
        if(items.portion !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'#4682B4',fontWeight:'900'}}>Portion Size</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.portion}</span><br/>
                  <button onClick={()=>{this.props.setItemType('portion',null)}}>Change Portion Size</button>
                </div>
            )
        }
        else{
            return <></>
        }
       }

     const showTaste = ()=>{
        if(items.taste !== null){
            return (
                <div className="bot-20 center ">
                  <span style={{color:'#FFD700',fontWeight:'900'}}>Taste Type</span> <br/>
                  <span style={{color:'forestgreen',fontWeight:'400'}}>{items.taste}</span><br/>
                  <button onClick={()=>{this.props.setItemType('taste',null)}}>Change Taste Type</button>
                </div>
            )
        }
        else{
            return <></>
        }
       }
    
       return (<>
               <div>{showMealType()}</div>
               <div>{showNutrient()}</div>
               <div>{showIngredient()}</div>
               <div>{showTime()}</div>
               <div>{showPortion()}</div>
               <div>{showTaste()}</div>
              </>)
    }
}