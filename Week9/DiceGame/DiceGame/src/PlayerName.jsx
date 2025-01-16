const PlayerName = ({ playerName, setPlayerName }) => {

    return (
        <div>
            <label>Player Name: </label>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
        </div>
    );
}

export default PlayerName;