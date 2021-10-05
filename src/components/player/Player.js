import React, { useState, useContext, createContext} from "react";
import ReactDOM from "react-dom";
import { Container,
         Button,
         Overlay,
         Inner,
         Close} from "./styles/PlayerStyled";

export const PlayerContext = createContext();

const Player = ({children, ...restprops}) => {
    const [showPlayer, setshowPlayer] = useState(false);

    return ( <PlayerContext.Provider value={{showPlayer, setshowPlayer}}>
                <Container {...restprops}>{children}</Container>
    </PlayerContext.Provider>)
}

const PlayerVideo = ({src, children, ...restprops}) => {
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setshowPlayer(false)}>
            <Inner>
                <video id="netflex-playa" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null;
}

const PlayerButton = () => {
    // eslint-disable-next-line
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setshowPlayer(showPlayer => !showPlayer)}>
        Play
    </Button>
}


export { Player, PlayerVideo, PlayerButton }
