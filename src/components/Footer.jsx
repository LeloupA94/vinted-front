import Logo from "../assets/vintedblanc.png";
import Store from "../assets/store.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contentFooter">
        <span>
          <i className="fa-brands fa-square-facebook"></i>
        </span>
        <span>
          <i className="fa-brands fa-linkedin"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <div className="logofooter">
          <img src={Logo} />
        </div>
        <div className="storelogo">
          <p>Télécharger notre application sur : </p>
          <img src={Store} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
