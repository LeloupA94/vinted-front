import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const [errorMessage, setErrormessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrormessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsLetter,
        }
      );
      //console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      //console.log(error.response.status);
      if (error.response.status === 409) {
        setErrormessage(
          "This email already has an account, please use another one"
        );
      } else if (error.response.data.message === "Missing parameters") {
        setErrormessage("Please fill in all the fields");
      }
    }
  };
  return (
    <main>
      <div className="signup-body">
        <h1>S'inscrire</h1>
        <form className="signupform" onSubmit={handleSubmit}>
          <input
            title="Username"
            label="Username"
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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

          <div className="check-form">
            <div>
              <div className="checkcarre">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={newsLetter}
                  onChange={() => {
                    setNewsLetter(!newsLetter);
                  }}
                />
                <span>S'inscrire à la Newsletter</span>
              </div>
              <p>
                En m'inscrivant je confirme avoir lu et accepté les termes &
                conditions et politique de confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
          </div>

          <button type="submit">S'inscrire</button>
          {errorMessage && <p className="signupform-error">{errorMessage}</p>}
          <Link to={"/login/"}>Tu as déja un compte ? Connecte toi !</Link>
        </form>
      </div>
    </main>
  );
};

export default Signup;
