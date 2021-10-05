import React from "react";
import * as ROUTES from "../constants/Routes"
import logo from "../logo.svg"
import {Header, HeaderFrame, HeaderLogo} from "../components/header/Header";
import {Profile, ProfileTitle, ProfileList, ProfileUser, ProfilePicture, ProfileName} from "../components/profiles/Profile";


const SelectProfileContainer = ({user, setprofile}) => {
   
    return (
        <>
            <Header bg={false}>
                <HeaderFrame>
                    <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflex" />
                </HeaderFrame>
            </Header>

            <Profile>

                <ProfileTitle>Who's Watching?</ProfileTitle>
                <ProfileList>
                    <ProfileUser onClick={() => setprofile({
                        displayName: user.displayName,
                        photoURL: user.photoURL})}>
                        <ProfilePicture src={user.photoURL} />
                        <ProfileName>{user.displayName}</ProfileName>
                    </ProfileUser>
                </ProfileList>
            </Profile>
        </>
    )
}

export default SelectProfileContainer