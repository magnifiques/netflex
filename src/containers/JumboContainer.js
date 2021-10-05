import React from "react"
import {Jumbotron ,JumbotronContainer, JumbotronPane, JumbotronTitle, JumbotronSubTitle, JumbotronImage } from "../components/jumbotron/Jumbotron"
import jumbodata from "../fixtures/jumbo.json"

const JumboContainer = () => {
    return (
    <JumbotronContainer>
      {jumbodata.map((item) => (
        <Jumbotron 
        key={item.id}
        direction={item.direction}>
          <JumbotronPane>
          <JumbotronTitle>{item.title}</JumbotronTitle>
          <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
          </JumbotronPane>

          <JumbotronPane>
          <JumbotronImage src={item.image} alt={item.alt}/>
          </JumbotronPane>
        </Jumbotron>))}
        </JumbotronContainer>
        )
}

export default JumboContainer;