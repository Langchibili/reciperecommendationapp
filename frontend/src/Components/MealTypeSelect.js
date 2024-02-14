import React from "react";
import ItemType from "./Includes/ItemType";

export default class MealTypeSelect extends React.Component {
    render() {
        return (
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center">Select Meal Type</h5>
                <div className="bot-20"><small className="center">Let us help you find the best recipe to cook today, but before we do, what type of meal would you like to cook?</small></div>

                <div className="row settings-row">
                    <ItemType
                        key='breakfast'
                        itemType="mealtype"
                        itemName="breakfast"
                        itemIcon={() => <i className="fas fa-coffee"></i>} // Font Awesome coffee icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='lunch'
                        itemType="mealtype"
                        itemName="lunch"
                        itemIcon={() => <i className="fas fa-utensils"></i>} // Font Awesome utensils icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='dinner'
                        itemType="mealtype"
                        itemName="dinner"
                        itemIcon={() => <i className="fas fa-drumstick-bite"></i>} // Font Awesome drumstick icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='comfort'
                        itemType="mealtype"
                        itemName="comfort"
                        itemIcon={() => <i className="fas fa-cookie"></i>} // Font Awesome cookie icon
                        setItemType={this.props.setItemType}
                    />
                </div>
            </div>
        );
    }
}
