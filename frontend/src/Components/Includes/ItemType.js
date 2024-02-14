import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import Icon from '@mdi/react';
import { mdiCookie } from '@mdi/js';

export default class ItemType extends React.Component{
      constructor(props){
          super(props)
          this.state = {
            MealTypeSelect: null
          }
      }
      render(){
          return( 
            <div className="col s6">
                <div className="setting-box z-depth-1 center">
                    <Link onClick={()=>{this.props.setItemType(this.props.itemType,this.props.itemName)}}>
                        {this.props.itemIcon()}
                        <h6 style={{textTransform:"capitalize"}}>{this.props.itemName}</h6>
                    </Link>
                </div>
            </div>
          )
      }
  }