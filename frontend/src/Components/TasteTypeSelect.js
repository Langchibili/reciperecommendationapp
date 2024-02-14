import React from "react";
import ItemType from "./Includes/ItemType";

export default class TasteTypeSelect extends React.Component {
    render() {
        return (
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center">Select Taste</h5>
                <div className="bot-20"><small className="center">Choose a taste to explore recipes:</small></div>

                <div className="row settings-row">
                    <ItemType
                        key='sweet'
                        itemType="taste"
                        itemName="Sweet"
                        itemIcon={() => <i className="fas fa-candy-cane"></i>} // Font Awesome candy cane icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='sour'
                        itemType="taste"
                        itemName="Sour"
                        itemIcon={() => <i className="fas fa-lemon"></i>} // Font Awesome lemon icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='salty'
                        itemType="taste"
                        itemName="Salty"
                        itemIcon={() => <i className="fas fa-pepper-hot"></i>} // Font Awesome hot pepper icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='bitter'
                        itemType="taste"
                        itemName="Bitter"
                        itemIcon={() => <i className="fas fa-coffee"></i>} // Font Awesome coffee icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='spicy'
                        itemType="taste"
                        itemName="Spicy"
                        itemIcon={() => <i className="fas fa-pepper-hot"></i>} // Font Awesome hot pepper icon
                        setItemType={this.props.setItemType}
                    />
                    <ItemType
                        key='any'
                        itemType="taste"
                        itemName="any"
                        itemIcon={() => <i className="fas fa-border-none"></i>} // Font Awesome dumbbell icon
                        setItemType={this.props.setItemType}
                    />
                </div>
            </div>
        );
    }
}
