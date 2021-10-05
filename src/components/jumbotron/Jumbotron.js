import React from "react"
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from "./styles/JumbotronStyled"


const Jumbotron = ({children, direction = 'row', ...restprops}) => {
    return (
        <Item>
            <Inner direction={direction}>
                    {children}
             </Inner>
        </Item>
    )
}

const JumbotronContainer = ({children, ...restprops}) => {
        return (<Container {...restprops}> {children} </Container>)
}

const JumbotronPane = ({children, ...restprops}) => {
    return (<Pane {...restprops}> {children} </Pane>)
}

const JumbotronTitle = ({children, ...restprops}) => {
    return (<Title {...restprops}>{children}</Title>)
}

const JumbotronSubTitle = ({children, ...restprops}) => {
    return (<SubTitle {...restprops}>{children}</SubTitle>)
}

const JumbotronImage = ({children, ...restprops}) => {
    return(<Image {...restprops} />)
}
export {Jumbotron, JumbotronContainer, JumbotronPane, JumbotronTitle, JumbotronSubTitle, JumbotronImage}