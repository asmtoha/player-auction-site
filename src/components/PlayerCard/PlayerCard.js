import React from 'react';
import './PlayerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignature,faPassport, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

const PlayerCard = (props) => {
    const {img,name,salary,nationality}=props.player /**object distructure */
    return (
        <div className="p-2">
            <div className="card mb-3 border-danger img-sizing-after-break-point" style={{maxWidth:"740px"}}>
                <div className="row g-0">
                    <div className="col-md-4 px-4 card-img-size py-2">
                        <img className="p-2 border rounded border-success" src={img} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title"><FontAwesomeIcon icon={faSignature}></FontAwesomeIcon>Name: {name}</h4>
                            <h6><FontAwesomeIcon icon={faPassport}> </FontAwesomeIcon>Nationality: {nationality}</h6>
                            <p><FontAwesomeIcon icon={faHandHoldingUsd}> </FontAwesomeIcon>Player fee: ${salary}</p>
                            <button className="btn btn-warning" onClick={()=>props.handleAddPlayer(props.player)}>Add your team</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;