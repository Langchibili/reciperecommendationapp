import React from "react"
import ItemType from "./Includes/ItemType"

export default class TimeSelect extends React.Component{
    render(){
        return(
            <div className="col s8 pad-0">
                <h5 className="bot-20 sec-tit center ">Select Time</h5>
                <div className="bot-20"><small className="center ">Choose a time duration to explore recipes:</small></div>
                
                <div className="row settings-row">
                    <ItemType
                        key='under-30-minutes'
                        itemType="time"
                        itemName="Under 30 Minutes"
                        itemIcon={() => <i className="mdi mdi-clock-fast" />}
                        setItemType={this.props.setItemType}
                    />
                    <ItemType 
                        key='30-60-minutes'
                        itemType="time"
                        itemName="30-60 Minutes"
                        itemIcon={() => <i className="mdi mdi-clock" />}
                        setItemType={this.props.setItemType}
                    />
                    <ItemType 
                        key='over-60-minutes'
                        itemType="time"
                        itemName="Over 60 Minutes"
                        itemIcon={() => <i className="mdi mdi-clock-end" />}
                        setItemType={this.props.setItemType}
                    />
                    {/* Add more time duration options as needed */}
                </div>
            </div>

        )
    }
}