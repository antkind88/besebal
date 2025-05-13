//---------
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

function App() {
  //load players
  const [players, setPlayers] = useState(null);
  /*const [battingAvg, filterBattingAvg] = useState("");
  const [games, filterGames] = useState("");*/
    useEffect(() => {
        axios
            .get("/api/players")
            .then((players) => setPlayers(players))
            .catch((err) => console.log(err));
    }, []);
  /*return (
    <div className="App">
      <header className="App-header">
        <img src='./baseball.png' className="App-logo" alt="logo" />
        <h2>Baseball Players Index</h2>
      </header>
    </div>
  );*/
   return (
        <>
            <h1>Players</h1>
            {players === null ? (
                <p>Loading...</p>
            ) : users.length === 0 ? (
                <p>No players available</p>
            ) : (
                <>
                    <h2>Players</h2>
                    <ol>
                        {players.map((player, index) => (
                            <li key={index}>
                                Name: {player.playerName} - Batting Average: {player.avg}
                            </li>
                        ))}
                    </ol>
                </>
            )}
        </>
    );
}

export default App;
