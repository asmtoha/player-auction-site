import React from 'react';
import './PlayersContainer.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import TeamInfo from '../TeamInfo/TeamInfo';

const PlayersContainer = () => {
    const firstTenPlayer = fakeData.slice(0, 10);
    const [players, setPlayers] = useState(firstTenPlayer)
    const [playerList,setPlayerList]=useState([])
    const handleAddPlayer =(player)=>{
        const newPlayerList = [...playerList,player]
        setPlayerList(newPlayerList)
    }
    return (
        <div className="players-container d-flex">
            <div className="single-player-container mt-1 mx-2">
                {
                    players.map(playerInfo => <PlayerCard handleAddPlayer={handleAddPlayer} player={playerInfo} key={playerInfo.id}></PlayerCard>)
                }
            </div>
            <div className="team-information-viwer">
                <TeamInfo playerList={playerList}></TeamInfo>
            </div>
        </div>
    );
};

export default PlayersContainer;