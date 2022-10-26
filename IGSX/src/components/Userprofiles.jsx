import React from "react";
import greengraph from '../components/green_graph.png';
import arrowgreen from '../components/green_arrow.png';

const Userprofiles = (props) => {
  return (
    <div>
      {props.profiles.map(({ image, name, studio, genre }) => {
        return (
          <div className="userProfile">
            <div className="user">
              <div className="userDiv">
                <img className="userImg" src={image} />
              </div>
              <div className="userDetails">
                <h4>{name}</h4>
                <p>Studio:{studio}</p>
                <p>Genre:{genre}</p>
              </div>
            </div>
            <div className="userEarnings">
              <img className="earningsGraph" src={greengraph} />
              <ul>
                <li>23.23</li>
                <li className="graphli"><img src={arrowgreen}/>23.25</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Userprofiles;
