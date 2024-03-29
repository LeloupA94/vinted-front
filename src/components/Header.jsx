import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = ({ token, handleToken }) => {
  return (
    <header className="header">
      <div className="contentHeader">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} />
          </div>
        </Link>
        <div className="searchbar">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="search"
            type="text"
            placeholder="Recherche d'articles"
          ></input>
        </div>
        <div>
          {token ? (
            <button
              className="logout"
              onClick={() => {
                handleToken(null);
              }}
            >
              Se Déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="signup">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="login">Se connecter</button>
              </Link>
            </>
          )}
        </div>
        <button className="soldbouton">Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
