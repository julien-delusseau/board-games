import {Fragment} from "react";

const RPS = ({player, image}) => {
    return (
        <div className={"player"}>
            <h4>Joueur {player}</h4>
            <img src={process.env.PUBLIC_URL + `/assets/${image}.png`} alt="RPS"/>
        </div>
    )
}

export default RPS