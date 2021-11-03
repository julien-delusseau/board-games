const Dice = ({player, image}) => {
    return (
        <div className={"player"}>
            <h4>Joueur {player}</h4>
            <img src={process.env.PUBLIC_URL + `/assets/dice${image}.png`} alt="Dice"/>
        </div>
    )
}

export default Dice