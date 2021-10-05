import React, { useState, createContext, useContext } from "react";
import {Container,
        Group,
        Title,
        SubTitle,
        Feature,
        FeatureTitle,
        FeatureText,
        FeatureClose,
        Maturity,
        Content,
        Text,
        Meta,
        Item,
        Image,
        Entities } from "./styles/CardsStyled";

export const FeatureContext = createContext();

const Card = ({children, ...restprops}) => {

    const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

    return (<FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
        <Container {...restprops}>{children}</Container>
    </FeatureContext.Provider>)
}

const CardGroup = ({children, ...restprops}) => {
    return <Group {...restprops}>{children}</Group>
}

const CardTitle = ({children, ...restprops}) => {
    return <Title {...restprops}>{children}</Title>
}

const CardSubTitle = ({children, ...restprops}) => {
    return <SubTitle {...restprops}>{children}</SubTitle>
}

const CardText = ({children, ...restprops}) => {
    return <Text {...restprops}>{children}</Text>
}

const CardEntities = ({children, ...restprops}) => {
    return <Entities {...restprops}>{children}</Entities>
}

const CardItem = ({ item, children, ...restProps }) => {

    const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  
    return (
      <Item 
        onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
        }}
      
      {...restProps}>
        {children}
      </Item>
    );
  };
  
const CardMeta = ({ children, ...restProps }) => {
    return <Meta {...restProps}>{children}</Meta>;
};

const CardImage = ({src, ...restprops}) => {
    return <Image src={src} {...restprops} />
}

const CardFeature = ({src, category, children, ...restprops}) => {

    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    
    return showFeature ? <Feature {...restprops} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
                <Content>
                    <FeatureTitle>{itemFeature.title}</FeatureTitle>
                    <FeatureText>{itemFeature.description}</FeatureText>
                    <FeatureClose onClick={() => setShowFeature(false)}>
                        <img src="/images/icons/close.png" alt="close" /> 
                    </FeatureClose>
                 

                <Group margin="30px 0" flexDirection="row" alginItems="center">
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
            </Feature> : null;
}

export {   
    Card, 
    CardGroup, 
    CardTitle, 
    CardSubTitle, 
    CardText, 
    CardItem, 
    CardImage,
    CardMeta,
    CardEntities,
    CardFeature };