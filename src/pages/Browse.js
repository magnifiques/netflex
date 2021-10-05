import React from "react";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";
import BrowserContainer from "../containers/BrowserContainer";

const Browse = () => {
    
    const { series } = useContent('series');
    const { films } = useContent('films');


    const slides = selectionFilter({series, films})
    
    return (<BrowserContainer slides={slides} />)
}

export default Browse;