import { useStarWars } from "../context/AppContext";
import logo from "../assets/starwars.png";
import starShipImg from "../assets/starship.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useHistory } from "react-router-dom"; // Ensure correct import
function Home() {
  const { filteredShips, handleSearchInput, searchTerm, handleSearchSubmit, selectShip } = useStarWars();
  const history = useHistory(); // Initialize useHistory
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={logo} alt="Logo" />
        </div>
        <form className="input" onSubmit={handleSearchSubmit}>
          <label htmlFor="search">Name / Model</label>
          <input
            type="search"
            className="input-search"
            placeholder="Name / Model"
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <button className="input-submit" type="submit">Filter</button>
        </form>

        <div className="cardContainer">
          {filteredShips.length > 0 ? (
            filteredShips.map((starShip) => (
              <div key={starShip.name} className="cardItem"
              onClick={() => selectShip(starShip.url.split("/").slice(-2)[0])}
              //  onClick={history.push(`/ship/${starShip.url.split("/").slice(-2)[0]}`)}
               >
                <Card sx={{ maxWidth: 345 }} className="cardOne">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={starShipImg}
                      alt="starship"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {starShip.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        <p>Model: {starShip.model}</p>
                        <p>Hyperdrive Rating: {starShip.hyperdrive_rating}</p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))
          ) : (
            <p>No ships found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;