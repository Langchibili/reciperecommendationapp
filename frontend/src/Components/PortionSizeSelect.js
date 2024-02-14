import React from "react";
import ItemType from "./Includes/ItemType";

export default class PortionSizeSelect extends React.Component {
    render() {
        return (
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center">Select Portion Size</h5>
                <div className="bot-20"><small className="center">Choose a portion size to explore recipes:</small></div>

                <div className="row settings-row">
                    <ItemType
                        key='small'
                        itemType="portion"
                        itemName="Small"
                        itemIcon={() => <i className="fas fa-utensils"></i>} // Font Awesome utensils icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='medium'
                        itemType="portion"
                        itemName="Medium"
                        itemIcon={() => <i className="fas fa-utensils"></i>} // Font Awesome utensils icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='large'
                        itemType="portion"
                        itemName="Large"
                        itemIcon={() => <i className="fas fa-utensils"></i>} // Font Awesome utensils icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='any'
                        itemType="portion"
                        itemName="any"
                        itemIcon={() => <i className="fas fa-border-none"></i>} // Font Awesome dumbbell icon
                        setItemType={this.props.setItemType}
                    />
                </div>
            </div>
        );
    }
}
