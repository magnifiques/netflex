import React from "react"
import {Container, Title, SubTitle} from "./styles/FeatureStyled"

const Feature = ({children, ...restprops}) => {
    return <Container {...restprops}>{children}</Container>
}

const FeatureTitle = ({children, ...restprops}) => {
    return <Title {...restprops}>{children}</Title>
}

const FeatureSubTitle = ({children, ...restprops}) => {
    return <SubTitle {...restprops}>{children}</SubTitle>
}


export {Feature, FeatureTitle, FeatureSubTitle}