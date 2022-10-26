import React from 'react';
import ipoback from '../components/cardimg.jpg'
import Userprofiles from './Userprofiles';

const Ipo = (props) => {
    console.log(props.profiles)
    return (
        <div>
            <div>
                <img className="cardimg" src={ipoback}/>
            </div>
            <div>
                <Userprofiles profiles={props.profiles}/>
            </div>
           
        </div>
    );
}

export default Ipo;
