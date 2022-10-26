import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import PopulateData from "./components/PopulateData";
import { userData, ipos } from "./Userdata";
import Ipo from "./components/Ipo";
import Userprofiles from "./components/Userprofiles";
import Footer from "./components/Footer";

function App() {
  const one_profile = [];
  one_profile.push(ipos[0]);
  return (
    <div>
      <Background />
      <Navbar />
      <div className="wrapper">
        <div className="top-movers box-shadow">
          <div className="form_tags">
            <h5 className="card_icon">TOP MOVERS</h5>
          </div>
          <div className="component_Data">
          <PopulateData userData={userData} isRed={true} />
          </div>
        </div>
        <div className="hot-properties box-shadow">
          <div className="form_tags">
            <h5 className="card_icon">HOT PROPERTIES</h5>
          </div>
          <div className="component_Data">
          <Userprofiles profiles={one_profile} />
          <PopulateData userData={userData.slice(0, 7)} />
          </div>
        </div>
        <div className="open-orders box-shadow">
          <div className="form_tags">
            <h5 className="card_icon">OPEN ORDERS</h5>
          </div>
          <div className="component_Data">
          <PopulateData userData={userData.slice(0, 3)} />
          </div>
        </div>
        <div className="ipos box-shadow">
          <div className="form_tags">
            <h5 className="card_icon">IPOS</h5>
          </div>
          <Ipo profiles={ipos} />
        </div>

        <div className="openingthisweek box-shadow">
          <div className="form_tags">
            <h5 className="card_icon">OPENING THIS WEEK</h5>
          </div>
          <div className="component_Data">
          <Userprofiles profiles={one_profile} />
          <PopulateData userData={userData.slice(0, 8)} />
          </div>
                  </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
