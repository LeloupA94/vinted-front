import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrormessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrormessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
      //console.log(response.data);
    } catch (error) {
      //console.log(error.response.status);
      if (error.response.status === 401) {
        setErrormessage("Wrong email or password");
      } else if (error.response.data.message === "Missing parameters") {
        setErrormessage("Please fill in all the fields");
      }
    }
  };

  return (
    <main>
      <div className="login-body">
        <h1>Se connecter</h1>
        <form className="loginform" onSubmit={handleSubmit}>
          <input
            title="Email"
            label="email"
            type="email"
            placeholder="Votre Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            title="Password"
            label="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button type="submit" value="Se Connecter">
            Se Connecter
          </button>
          {errorMessage && <p className="loginform-error">{errorMessage}</p>}
          <Link to={"/signup/"}>Tu n'a pas de compte ? Inscrit toi</Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
