import React from "react";
import ItemType from "./Includes/ItemType";

export default class NutrientSelect extends React.Component {
    render() {
        return (
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center">Select Nutrient</h5>
                <div className="bot-20"><small className="center">Choose a nutrient to explore its recipes:</small></div>

                <div className="row settings-row">
                    <ItemType
                        key='protein'
                        itemType="nutrient"
                        itemName="Protein"
                        itemIcon={() => <i className="fas fa-drumstick-bite"></i>} // Font Awesome drumstick icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='carbohydrates'
                        itemType="nutrient"
                        itemName="Carbohydrates"
                        itemIcon={() => <i className="fas fa-cookie-bite"></i>} // Font Awesome croissant icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='fat'
                        itemType="nutrient"
                        itemName="Fat"
                        itemIcon={() => <i className="fas fa-oil-can"></i>} // Font Awesome oil can icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='fiber'
                        itemType="nutrient"
                        itemName="Fiber"
                        itemIcon={() => <i className="fas fa-font"></i>} // Font Awesome font icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='vitamin-a'
                        itemType="nutrient"
                        itemName="Vitamin A"
                        itemIcon={() => <i className="fas fa-carrot"></i>} // Font Awesome carrot icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='vitamin-c'
                        itemType="nutrient"
                        itemName="Vitamin C"
                        itemIcon={() => <i className="fas fa-lemon"></i>} // Font Awesome lemon icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='calcium'
                        itemType="nutrient"
                        itemName="Calcium"
                        itemIcon={() => <i className="fas fa-bone"></i>} // Font Awesome bone icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='iron'
                        itemType="nutrient"
                        itemName="Iron"
                        itemIcon={() => <i className="fas fa-dumbbell"></i>} // Font Awesome dumbbell icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='any'
                        itemType="nutrient"
                        itemName="any"
                        itemIcon={() => <i className="fas fa-border-none"></i>} // Font Awesome dumbbell icon
                        setItemType={this.props.setItemType}
                    />
                </div>
            </div>
        );
    }
}
