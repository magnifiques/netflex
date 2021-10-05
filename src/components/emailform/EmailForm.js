import React from "react"
import {Container, Input, Button, Text, Break} from "./styles/EmailFormStyled"


const EmailForm = ({children, ...restprops}) => {
    return <Container {...restprops}>{children}</Container>
}

const EmailFormInput = ({children, ...restprops}) => {
    return <Input {...restprops} />
}

const EmailFormButton = ({children, ...restprops}) => {
    return(
        <Button {...restprops}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

const EmailFormText = ({children, ...restprops}) => {
    return <Text {...restprops}>{children}</Text>
}

const EmailFormBreak = ({children, ...restprops}) => { return <Break {...restprops} />}

export {EmailForm, EmailFormInput, EmailFormButton, EmailFormText, EmailFormBreak}