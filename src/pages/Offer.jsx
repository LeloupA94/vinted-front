import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //console.log(useParams());
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
      <h1>offer</h1>
      <img src={data.product_image.secure_url} alt="" />
      <p>PRIX : {data.product_price} €</p>
      <div>
        <p>MARQUE : {data.product_details[0].MARQUE}</p>
        <p>ETAT : {data.product_details[1].ETAT}</p>
        <p>COULEUR : {data.product_details[2].COULEUR}</p>
      </div>
    </main>
  );
};

export default Offer;
