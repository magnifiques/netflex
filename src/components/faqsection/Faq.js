/* eslint-disable no-unused-vars */
import React, { useState, useContext, createContext } from "react";
import {Container, Inner, Title, Item, Header, Body} from "./styles/FaqStyled"

const ToggleContext = createContext();

const Faq = ({children, ...restprops}) => {
    return(
        <Container>
        <Inner  {...restprops}>{children}</Inner>
        </Container>
    )
}

const FaqTitle = ({children, ...restprops}) => {
    return(
        <Title {...restprops}>{children}</Title>
    )
}

const FaqItem = ({children, ...restprops}) => {
    
    const [toggleShow, settoggleShow] = useState(false)

    return(
    <ToggleContext.Provider value={{toggleShow, settoggleShow}}>
        <Item {...restprops}>{children}</Item>
    </ToggleContext.Provider>
     )
}

const FaqHeader = ({children, ...restprops}) => {

    const {toggleShow, settoggleShow} = useContext(ToggleContext)

    return(
        <Header onClick={() => settoggleShow((toggleShow) => !toggleShow)} 
        {...restprops}>
        {children}
        {toggleShow ? <img src="/images/icons/close-slim.png" alt="close"/>
            : <img src="/images/icons/add.png" alt="add"/>}
        </Header>
    )
}

const FaqBody = ({children, ...restprops}) => {
    const {toggleShow} = useContext(ToggleContext)

    return toggleShow && <Body {...restprops}>{children}</Body>
}

export {Faq, FaqTitle, FaqItem, FaqHeader, FaqBody}