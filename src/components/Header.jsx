import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} />
      </div>
      <h1>React Counter</h1>
    </header>
  );
};
export default Header;
