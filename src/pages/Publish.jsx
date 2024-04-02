import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  //si connecter j'affiche ma page sinon direction page login
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vented-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data._id) {
        navigate(`/offers/${response.data._id}`);
      }
    } catch (error) {
      console.log("je suis dans le catch", error);
    }
  };

  return token ? (
    <main className="publish-content">
      <form className="formpusblish" onSubmit={handleSubmit}>
        <h1>Vend ton article</h1>
        {picture && <img src={URL.createObjectURL(picture)} alt="produit" />}
        <div className="dropbox">
          <label className="btnupload" htmlFor="picture-input">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Joindre photo
          </label>
          <input
            style={{ display: "none" }}
            id="picture-input"
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div className="form-field">
          <label>Titre</label>
          <input
            type="text"
            name="title"
            placeholder="ex: chemise verte"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Description</label>
          <textarea
            rows={5}
            cols={30}
            name="description"
            placeholder="ex: Chemise grande classe, peut porté et en lin"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Marque</label>
          <input
            type="text"
            name="brand"
            placeholder="ex: Channel"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Taille</label>
          <input
            type="text"
            name="size"
            placeholder="ex: L / M / 34 / 36"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Couleur</label>
          <input
            type="text"
            name="color"
            placeholder="ex: Magenta"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Etat</label>
          <input
            type="text"
            name="condition"
            placeholder="ex: Neuf avec étiquette"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Ville</label>
          <input
            type="text"
            name="city"
            placeholder="ex: Paris"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="sepagrise"></div>
        <div className="form-field">
          <label>Prix</label>
          <input
            type="number"
            name="price"
            placeholder="ex: 10,00€"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <input className="btnsubmitform" type="submit" value={"Ajouter"} />
      </form>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
