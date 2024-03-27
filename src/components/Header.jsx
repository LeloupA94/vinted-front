import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="contentHeader">
        <div className="logo">
          <img src={Logo} />
        </div>
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
          <button className="signup">S'inscrire</button>
          <button className="login">Se connecter</button>
        </div>
        <button className="soldbouton">Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
