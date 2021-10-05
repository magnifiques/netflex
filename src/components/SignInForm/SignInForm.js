import React from "react";
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from "./styles/SignInFormStyled"

const Form = ({children, ...restprops}) => {
    return (<Container {...restprops}>{children}</Container>);
}   

const FormBase = ({children, ...restprops}) => {
    return (<Base {...restprops}>{children}</Base>);
}   

const FormError = ({children, ...restprops}) => {
    return (<Error {...restprops}>{children}</Error>);
}   

const FormTitle = ({children, ...restprops}) => {
    return (<Title {...restprops}>{children}</Title>);
}   

const FormText = ({children, ...restprops}) => {
    return (<Text {...restprops}>{children}</Text>);
}   

const FormTextSmall = ({children, ...restprops}) => {
    return (<TextSmall {...restprops}>{children}</TextSmall>);
}   

const FormLink = ({children, ...restprops}) => {
    return (<Link {...restprops}>{children}</Link>);
}   

const FormInput = ({children, ...restprops}) => {
    return (<Input {...restprops}>{children}</Input>);
}   

const FormSubmit = ({children, ...restprops}) => {
    return (<Submit {...restprops}>{children}</Submit>);
}  

export {Form, FormBase, FormError, FormTitle, FormText, FormTextSmall, FormLink, FormInput, FormSubmit}