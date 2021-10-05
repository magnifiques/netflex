import React, {useState, useContext, createContext} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, 
         Poster, 
         Container, 
         Button, 
         Feature,
         Logo, 
         Text, 
         Title, 
         TextLink,
         Group,
         DropDown,
         Profile,
         Picture,
         Search,
         SearchIcon,
         SearchInput,
         PlayButton,
         Overlay,
         Inner
         } from "./styles/HeaderStyled";
import ReactDOM from "react-dom";

export const PlayerContext = createContext();

const Header = ({bg=true, children, ...restprops}) => {
    return bg ? <Background {...restprops}>{children}</Background> : children;
}

const HeaderBG = ({bg=true, children, ...restprops}) => {
    return bg ? <Poster {...restprops}>{children}</Poster> : children;
}

const HeaderFrame = ({children, ...restprops}) => {
    return <Container {...restprops}>{children}</Container>
}

const HeaderLogo = ({to, ...restprops}) => {
   return ( <ReactRouterLink to={to}>
        <Logo {...restprops} />
    </ReactRouterLink>)

}

const HeaderButton = ({to, children, ...restprops}) => {
    return(<Button to={to} {...restprops}>
    {children}</Button>)
}

const HeaderFeature = ({children, ...restprops}) => {
    return <Feature {...restprops}>{children}</Feature>
}

const HeaderTitle = ({children, ...restprops}) => {
    return <Title {...restprops}>{children}</Title>
}

const HeaderText = ({children, ...restprops}) => {

    return <Text {...restprops}>{children}</Text>
}

const HeaderLink = ({active, children, ...restprops}) => {
    return <TextLink active={active} {...restprops}>{children}</TextLink>
}

const HeaderGroup = ({children, ...restprops}) => {
    return <Group {...restprops}>{children}</Group>    
}

const HeaderProfile = ({children, ...restprops}) => {
    return <Profile {...restprops}>{children}</Profile>
}

const HeaderPicture = ({src, ...restprops}) => {
    return <Picture {...restprops} src={`/images/users/${src}.png`} />
}

const HeaderDropDown = ({children, ...restprops}) => {
    return <DropDown {...restprops}>{children}</DropDown>
}

const HeaderSearch = ({searchTerm, setSearchTerm, ...restprops}) => {
    const [searchActive, setsearchActive] = useState(false);


    return ( <Search {...restprops}>
        <SearchIcon onClick={() => setsearchActive((searchActive) => !searchActive)} data-testid="search-click">
          <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Search films and series"
          active={searchActive}
          data-testid="search-input"/>
      </Search>)
}

const HeaderPlayer = ({children, ...restprops}) => {
    const [showPlayer, setshowPlayer] = useState(false);

    return ( <PlayerContext.Provider value={{showPlayer, setshowPlayer}}>
                <Container {...restprops}>{children}</Container>
    </PlayerContext.Provider>)
}

const HeaderPlayButton = ({children, ...restprops}) => {
     // eslint-disable-next-line
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);
    
    return <PlayButton {...restprops} onClick={() => setshowPlayer(showPlayer => !showPlayer)}>
                {children}
            </PlayButton>
}

const HeaderPlayVideo = ({src, children, ...restprops}) => {
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);
    

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setshowPlayer(false)}>
            <Inner>
                <video id="netflex-playa" controls>
                    <source src={src} type="video/mp4" />
                </video>
            </Inner>
        </Overlay>,
        document.body
    ) : null;
};

export {Header, 
        HeaderBG, 
        HeaderFrame, 
        HeaderLogo, 
        HeaderButton, 
        HeaderFeature, 
        HeaderText, 
        HeaderTitle, 
        HeaderLink, 
        HeaderGroup,
        HeaderProfile,
        HeaderPicture,
        HeaderDropDown,
        HeaderSearch,
        HeaderPlayer,
        HeaderPlayButton,
        HeaderPlayVideo
    }