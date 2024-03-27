import { Link } from "react-router-dom";
import SepaTop from "../assets/sepa-top.svg";
import React from "react";

const Home = ({ data }) => {
  //console.log(data);
  return (
    <>
      <div className="home-slide"></div>
      <img id="separtop" src="./src/assets/sepa-top.svg" />
      <div className="home-card-wrap">
        {data.offers.map((offer, index) => {
          return (
            <div className="card-container" key={offer._id}>
              <div className="card-avatar">
                <img src={offer.owner.account.avatar.secure_url} />
                <span>{offer.owner.account.username}</span>
              </div>
              <div className="card-pictures">
                <img
                  src={offer.product_pictures[0].secure_url}
                  alt={offer.product_name}
                />
              </div>
              <div className="card-infos">
                <p>Prix: {offer.product_price} €</p>
                <ul>
                  {offer.product_details
                    .filter((detail) =>
                      ["TAILLE", "MARQUE"].includes(Object.keys(detail)[0])
                    )
                    .map((detail, index) => (
                      <li key={index}>
                        {Object.keys(detail)[0]}: {Object.values(detail)[0]}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}

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
      {/*<Link to="/details">Cliquez ici pour aller ver sla page details</Link>*/}
    </>
  );
};

export default Home;
