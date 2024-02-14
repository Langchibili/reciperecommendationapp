import React from "react";
import ItemType from "./Includes/ItemType";

export default class IngredientSelect extends React.Component {
    render() {
        return (
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center">Select Ingredient</h5>
                <div className="bot-20"><small className="center">Choose an ingredient to explore recipes:</small></div>

                <div className="row settings-row">
                    <ItemType
                        key='chicken'
                        itemType="ingredient"
                        itemName="Chicken"
                        itemIcon={() => <i className="fas fa-drumstick-bite"></i>} // Font Awesome drumstick icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='beef'
                        itemType="ingredient"
                        itemName="Beef"
                        itemIcon={() => <i className="fas fa-bacon"></i>} // Font Awesome steak icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='fish'
                        itemType="ingredient"
                        itemName="Fish"
                        itemIcon={() => <i className="fas fa-fish"></i>} // Font Awesome fish icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='pasta'
                        itemType="ingredient"
                        itemName="Pasta"
                        itemIcon={() => <i className="fas fa-bowl-food"></i>} // Font Awesome pizza slice icon (alternative to pasta)
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='rice'
                        itemType="ingredient"
                        itemName="Rice"
                        itemIcon={() => <i className="fas fa-bowl-rice"></i>} // Font Awesome rice icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='vegetables'
                        itemType="ingredient"
                        itemName="Vegetables"
                        itemIcon={() => <i className="fas fa-carrot"></i>} // Font Awesome carrot icon
                        setItemType={this.props.setItemType}
                    />
                </div>
            </div>
        );
    }
}
