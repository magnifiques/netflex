import React from "react";
import {Container, Row, Column, Link, Title, Text, Break} from "./styles/FooterStyled"

const Footer = ({children, ...restprops}) => {
    return (<Container {...restprops}>{children}</Container>)
}

const FooterRow = ({children, ...restprops}) => {
    return (<Row {...restprops}>{children}</Row>)
}

const FooterColumn = ({children, ...restprops}) => {
    return (<Column {...restprops}>{children}</Column>)
}

const FooterLink = ({children, ...restprops}) => {
    return (<Link {...restprops}>{children}</Link>)
}


const FooterTitle = ({children, ...restprops}) => {
    return (<Title {...restprops}>{children}</Title>)
}


const FooterText = ({children, ...restprops}) => {
    return (<Text {...restprops}>{children}</Text>)
}


const FooterBreak = ({children, ...restprops}) => {
    return (<Break {...restprops}>{children}</Break>)
}

export {Footer, FooterRow, FooterColumn, FooterLink, FooterTitle, FooterText, FooterBreak}