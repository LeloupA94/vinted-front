import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Login = () => {
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
      <div className="login-body">
        <h1>Se connecter</h1>
        <form className="loginform">
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

          <button type="submit">Se connecter</button>
          <a href="/Signup">tu as déja un compte ? Connecte-toi</a>
        </form>
      </div>
    </main>
  );
};

export default Login;
