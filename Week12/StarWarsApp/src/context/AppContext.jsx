import { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Ensure correct import

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [starShips, setStarShips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShips, setFilteredShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const history = useHistory(); // Initialize useHistory
  const [shipId, setShipId] = useState(null);

  const fetchStarShips = async () => {
    await axios.get("https://swapi.dev/api/starships").then((response) => {
      setStarShips(response.data.results);
    });
  };

  useEffect(() => {
    fetchStarShips();
  }, []);

  useEffect(() => {
    setFilteredShips(
      starShips.filter(
        (ship) =>
          ship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ship.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, starShips]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchTerm);
  };

  const fetchIdStarShips = async (id) => {
    const ship = starShips.find((s) => s.url.endsWith(`/${id}/`));
    
    if (ship) {
      setSelectedShip(ship);
      history.push(`/ship/${id}`); // Navigate to the details page
      document.location.reload();
    } else {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSelectedShip(data);
        history.push(`/ship/${id}`); // Navigate to the details page
        document.location.reload();
      } catch (error) {
        console.error("Error fetching ship details:", error);
        setSelectedShip(null); // or use an error state
      }
    }
  };

  useEffect(() => {
    if (shipId) {
      fetchIdStarShips(shipId);
    }
  }, [shipId]);

  const selectShip = (id) => {
    setShipId(id);
    //fetchIdStarShips(id);
  };

  const goBack = () => {
    setSelectedShip(null);
    history.push("/"); // Navigate back to the home page
  };

  return (
    <AppContext.Provider
      value={{
        starShips,
        searchTerm,
        filteredShips,
        selectedShip,
        selectShip,
        goBack,
        handleSearchInput,
        handleSearchSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStarWars = () => useContext(AppContext);