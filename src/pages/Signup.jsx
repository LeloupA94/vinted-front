import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //console.log(useParams());
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/user/signup`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="signup-body">
        <h1>S'inscrire</h1>
        <form className="signupform">
          <input
            title="Username"
            label="Username"
            type="text"
            placeholder="Nom d'utilisateur"
          />
          <input
            title="Email"
            label="email"
            type="email"
            placeholder="Votre Email"
          />
          <input
            title="Password"
            label="password"
            type="password"
            placeholder="Mot de passe"
          />

          <div className="check-form">
            <div>
              <input type="checkbox" name="checkbox" />
              <span>S'inscrire à la Newsletter</span>
              <p>
                En m'inscrivant je confirme avoir lu et accepté les termes &
                conditions et politique de confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
          </div>

          <button type="submit">S'inscrire</button>
          <Link to={"/Login/"}>Si tu as déja un compte, Connecte toi</Link>
        </form>
      </div>
    </main>
  );
};

export default Signup;
