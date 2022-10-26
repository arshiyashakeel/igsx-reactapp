import React from 'react';
import{FaIcon} from 'react-fa-icon';
import { FaTrend } from "react-icons/fa";

const PopulateData = (props) => {
    const {isRed, userData} = props;
    console.log(userData)
        return (
        <div className='grid-container'> 
            <div id="item1">
          <table id="customers">
          <tr>
                <th>Asset Name</th>
                <th>Price</th>
                <th>24th Change</th>
                <th>24th Volume</th>
              </tr>
            {userData.map(({name,price,change,volume})=>{
                return (
                    <tr>
                    <th>{name}</th>
                    <th className={`${isRed?"red":"green"}`}>{price}</th>
                    <th className={`${isRed?"green":"red"}`}>{change}</th>
                    <th>{volume}</th>
                  </tr>
                )
               
            })}
          </table>
        </div>
        </div>
    );
}

export default PopulateData;
