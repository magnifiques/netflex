import React, { useContext, useEffect, useState } from "react";
import SelectProfileContainer from "./ProfilesContainer";
import PosterDetails from "../components/postersdetails/PosterDetails"
import { FirebaseContext } from "../contexts/FirebaseContext";
import {Loading, LoadingReleaseBody} from "../components/loading/Loading";
import { HeaderBG, 
        HeaderFrame, 
        HeaderLogo, 
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
        HeaderPlayVideo } from "../components/header/Header";
import {Card, 
        CardGroup, 
        CardTitle, 
        CardSubTitle, 
        CardText,
        CardMeta, 
        CardItem, 
        CardImage,
        CardEntities,
        CardFeature} from "../components/cards/Cards";
import { Footer, 
         FooterRow, 
         FooterColumn, 
         FooterLink, 
         FooterTitle, 
         FooterBreak, 
         FooterText } from "../components/footer/Footer";
import { Player, PlayerVideo, PlayerButton } from "../components/player/Player";
import * as ROUTES from "../constants/Routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import logo from "../logo.svg";
import Fuse from "fuse.js"
import 'normalize.css';


const BrowserContainer = ({ slides }) => {

    const [category, setCategory] = useState('films');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    let posternumber = 20;
    let videonumber = Math.floor(Math.random() * 10) + 1;

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const changeVideoNumber = () => {
      videonumber = Math.floor(Math.random() * 5) + 1;
    }

    
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);
    
      useEffect(() => {
        setSlideRows(slides[category]);
        changeVideoNumber();
        // eslint-disable-next-line
      }, [slides, category]);
      
      console.log(videonumber);

      useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
        } else {
          setSlideRows(slides[category]);
        }
        // eslint-disable-next-line
      }, [searchTerm]);


    return  profile.displayName
     ? 
     ( 
         <>
          {loading ? <Loading src={user.photoURL} /> : <LoadingReleaseBody />}
         
          

         <HeaderBG src={posternumber}>

         <HeaderFrame>
                <HeaderGroup>
                    <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflex"/>
                    
                    <HeaderLink active={category === 'films' ? 'true' : 'false'}

                                onClick={() => setCategory('films')}>
                                Films
                    </HeaderLink>
                    <HeaderLink active={category === 'series' ? 'true' : 'false'} 
                                onClick={() => setCategory('series') }>
                                Series
                    </HeaderLink>
                </HeaderGroup>

                <HeaderGroup>
                    <HeaderSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

                    <HeaderProfile>
                        <HeaderPicture src={user.photoURL} />
                        <HeaderDropDown>
                            <HeaderGroup>
                                <HeaderPicture src={user.photoURL} />
                                <HeaderLink active='true'>{user.displayName}</HeaderLink>
                            </HeaderGroup>

                            <HeaderGroup>
                                <HeaderLink active='true' onClick={() => firebase.auth().signOut()}>Sign Out</HeaderLink>
                            </HeaderGroup>

                        </HeaderDropDown>
                    </HeaderProfile>
                </HeaderGroup>
            </HeaderFrame>

            <HeaderFeature>
                <HeaderTitle>
                     {PosterDetails[posternumber].Title}
                </HeaderTitle>

                <HeaderText>
                    {PosterDetails[posternumber].Desc}
                </HeaderText>
                <HeaderPlayer>
                  <HeaderPlayButton>Play</HeaderPlayButton>
                  <HeaderPlayVideo src={`/videos/${posternumber}.mp4`} />
                </HeaderPlayer>
            </HeaderFeature>
         </HeaderBG>

         <CardGroup onClick={changeVideoNumber}>
         {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <CardTitle>{slideItem.title}</CardTitle>
            <CardEntities>
              {slideItem.data.map((item) => (
                <CardItem key={item.docId} item={item} >
                  <CardImage src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <CardMeta>
                    <CardSubTitle>{item.title}</CardSubTitle>
                    <CardText>{item.description}</CardText>
                  </CardMeta>
                </CardItem>
                ))}
                </CardEntities>

                <CardFeature category={category}>
                    <Player>
                        <PlayerButton />
                        <PlayerVideo src={`/videos/playavideos/${videonumber}.mp4`}/>
                    </Player>
                </CardFeature>
                 </Card>
             ))}
         </CardGroup>
         <Footer>
                <FooterTitle>Questions? Call 000-420-069-1420</FooterTitle>

                <FooterBreak/>
                <FooterRow>

                <FooterColumn>
                    <FooterLink href="#">FAQ</FooterLink>
                    <FooterLink href="#">Cookie Preferences</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Help Centre</FooterLink>
                    <FooterLink href="#">Corporate Information</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Terms Of Services</FooterLink>   
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Privacy</FooterLink>
                </FooterColumn>

            </FooterRow>
            <FooterBreak/>

            <FooterText>Netflex San Andreas</FooterText>
            <FooterText>The Project is made by Magnifiques. 
            My link: <a href="https://github.com/magnifiques" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faGithub} /> Github</a>
            </FooterText>
        </Footer>
         </>
         ) 
      :  (<SelectProfileContainer user={user} setprofile={setProfile}/>)
}

export default BrowserContainer

