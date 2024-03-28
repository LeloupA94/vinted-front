import { useParams } from "react-router-dom";

const Offer = () => {
  //   const params = useParams();
  //   console.log(params.id);
  const { _id } = useParams();

  return (
    <>
      <h1>Je suis sur la page de l'offre dont l'id est {_id}</h1>;
    </>
  );
};

export default Offer;
