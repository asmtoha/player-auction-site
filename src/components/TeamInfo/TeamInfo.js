import React from 'react';
import './TeamInfo.css';
const TeamInfo = (props) => {
    const player = props.playerList
    const totalPlayerFee = player.reduce((totalPlayerFee, player) => totalPlayerFee + player.salary, 0);
    const selectedPlayerList = player.map(pl =>pl.name+pl.sign+"\n")
    return (
        <div>
            <div className="team-main-info">
                <div>
                <h3 className="information-title-sizing">PSYs0s's Gang</h3>
                <h5 className="information-title-sizing">Total player added : {player.length}</h5>
                <h6 className="information-title-sizing">Total player fee : {totalPlayerFee}</h6>
                </div>
                <h3 className="information-title-sizing">Selected players name 👇</h3>
                <div className="new-line">
                    <h6 className="information-title-sizing">{selectedPlayerList} </h6>           
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;