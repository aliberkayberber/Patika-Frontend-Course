import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import shipImg from "../assets/starship.jpg";

function Detail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const fetchShip = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
        setShip(response.data);
      } catch (error) {
        console.error("Error fetching ship details:", error);
      }
    };

    fetchShip();
  }, [id]);

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailContainer">
      <div className="detailCard">
        <img src={shipImg} alt="starship" />
        <h1>{ship.name}</h1>
        <p>Model: {ship.model}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Cost in credits: {ship.cost_in_credits}</p>
        <p>Length: {ship.length}</p>
        <p>Max atmosphering speed: {ship.max_atmosphering_speed}</p>
        <p>Crew: {ship.crew}</p>
        <p>Passengers: {ship.passengers}</p>
        <p>Cargo capacity: {ship.cargo_capacity}</p>
        <p>Consumables: {ship.consumables}</p>
        <p>Hyperdrive rating: {ship.hyperdrive_rating}</p>
        <p>MGLT: {ship.MGLT}</p>
        <p>Starship class: {ship.starship_class}</p>
      </div>
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
}

export default Detail;