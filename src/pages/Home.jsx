import { Link } from "react-router-dom";
import React from "react";

const Home = ({data}) => {
  return (
    <>
      <div className="home-slide"></div>
      <div className="separtop"></div>
      <div className="home-card" key={index}
      {data.offers.map((offers, id) => {
        console.log(offers);

      })}
      >
        <div className="card-container">
          <div className="card-avatar"></div>
          <div className="card-pictures">
            <div className="card-infos">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/details">Cliquez ici pour aller ver sla page details</Link>
    </>
  );
};

export default Home;
