import React from "react";
import {Spinner, LockBody, Picture, ReleaseBody} from "./styles/LoadingStyled"


const Loading = ({src, ...restprops}) => {
    return( 
    <Spinner {...restprops}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
   ) 
}

const LoadingReleaseBody = () => {
    return <ReleaseBody />
}

export {Loading, LoadingReleaseBody}