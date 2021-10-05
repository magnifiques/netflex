import React from "react"
import {Header, HeaderFrame, HeaderLogo, HeaderButton} from "../components/header/Header";
import * as ROUTES from "../constants/Routes"
import logo from "../logo.svg"
const HeaderContainer = ({children}) => {
    
    return (
        <Header>
            <HeaderFrame>
                <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflex"/>
                <HeaderButton to={ROUTES.SIGN_IN}>Sign In</HeaderButton>
            </HeaderFrame>
                {children}
        </Header>
    )
}

export default HeaderContainer;