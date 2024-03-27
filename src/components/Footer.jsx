import SepaFooter from "../assets/sepa-bas.svg";
const Footer = () => {
  return (
    <footer>
      <div className="separate">
        <img src={SepaFooter} />
      </div>
      <div className="containerfooter">
        <p>
          Made with{" "}
          <span>
            <a href="https://fr.legacy.reactjs.org/" target="_blank">
              React{" "}
            </a>
          </span>
          at{" "}
          <span>
            <a href="https://www.lereacteur.io/" target="_blank">
              Le Reacteur{" "}
            </a>
          </span>
          by{" "}
          <span>
            <a href="https://github.com/LeloupA94" target="_blank">
              {" "}
              MrWolf
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
