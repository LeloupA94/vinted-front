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
      <div className="offer-body">
        <div className="offer-content">
          <div className="offer-picture">
            <img src={data.product_image.secure_url} alt="" />
          </div>
          <div className="offer-infos">
            <p>PRIX : {data.product_price} €</p>
            <div>
              {data.product_details.map((detail) => {
                console.log(detail);
                const keys = Object.keys(detail);
                console.log(keys);
                const Keyname = keys[0];
                console.log(Keyname);
                return (
                  <p key={Keyname}>
                    {Keyname} : {detail[Keyname]}
                  </p>
                );
              })}
            </div>
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offer;
