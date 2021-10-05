import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a{
        display:flex;
    }

    @media(max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({src}) => (src ? `../images/posters/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;    
`;

export const Poster = styled.div`
    display: flex;
    flex-direction: column;
    background:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${({src}) => (src ? `../images/posters/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;

    @media(max-width: 1100px){
        background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        background:
}
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;


export const Title = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    margin-bottom: 20px;
    user-select: none;
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    user-select: none;
`;


export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    @media(min-width: 1449px) {
        height: 40px;
        width: 167px;
    }

`;

export const Button = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover{
        background-color: #f40612;
    }
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media(max-width: 1100px) {
        display: none;
    }
`;

export const TextLink = styled.p`
  color: red;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  color: ${({ active }) => (active === 'true' ? '#fff' : 'gray')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: red;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const DropDown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    z-index: 100;
    ${Group}: last-of-type ${TextLink} {
            cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${TextLink}, ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    
    button  {
        cursor: pointer;
    }

    &:hover > ${DropDown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: #fff;
        cursor: pointer;
    }

    @media(max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img{
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => active === true ? '10px' : '0'};
    padding: ${({ active }) => active === true ? '0 10px' : '0'};
    opacity: ${({ active }) => active === true ? '1' : '0'};
    width: ${({ active }) => active === true ? '200px' : '0px'};
`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    margin: 0 -1px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;

    video{
        height: 100%;
        width: 100%;
    }
`;

export const PlayButton = styled.button`
    box-shadow: 0 0 0.6vw 1vw -0.4vw rbga(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 40px;
    cursor: pointer;
    transition: background-color 0.5s;
    margin-block: 4px;
    margin-inline: -51px;

    &:hover {
        background-color: #ff1e1e;
        color: #fff;
    }

`;