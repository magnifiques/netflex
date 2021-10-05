import React from "react"
import {Container, Title, List, Item, Picture, Name} from "./styles/ProfileStyled"


const Profile = ({children, ...restprops}) => {
    return <Container {...restprops}>{children}</Container>
}

const ProfileTitle = ({children, ...restprops}) => {
    return <Title {...restprops}>{children}</Title>
}

const ProfileList = ({children, ...restprops}) => {
    return <List {...restprops}>{children}</List>
}

const ProfileUser = ({children, ...restprops}) => {
    return <Item {...restprops}>{children}</Item>
}

const ProfilePicture = ({src, ...restprops}) => {
    return <Picture {...restprops} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}/>
}

const ProfileName = ({children, ...restprops}) => {
    return <Name {...restprops}>{children}</Name> 
}

export {Profile, ProfileTitle, ProfileList, ProfileUser, ProfilePicture, ProfileName}