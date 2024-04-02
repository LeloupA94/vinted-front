import { Link } from "react-router-dom";
import SepaTop from "../assets/sepa-top.svg";
import React from "react";

const Home = ({ data }) => {
  //console.log(data);
  return (
    <>
      <div className="home-slide">
        <div className="contentSlider">
          <div className="cart-news">
            <div className="newsslide">
              <p>Prêts à faire du tri dans vos placards ??</p>
              <Link to={"/publish"}>
                <button>Commencer à vendre</button>
              </Link>
            </div>
          </div>
          <img id="separtop" src={SepaTop} alt="separateurtop" />
        </div>
      </div>
      <div className="home-card-wrap">
        {data.offers.map((offer, index) => {
          return (
            <div className="card-container" key={index}>
              <Link to={`/offer/${offer._id}`}>
                <div className="card-avatar">
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar?.secure_url}
                      alt="laphoto"
                    />
                  )}
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
              </Link>
            </div>
          );
        })}

        <div className="card-container">
          <div className="card-avatar"></div>
          <div className="card-pictures">
            <div className="card-infos"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
