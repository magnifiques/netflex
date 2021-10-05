import React from "react";
import { EmailForm, EmailFormText, EmailFormBreak, EmailFormInput, EmailFormButton } from "../components/emailform/EmailForm";
import { Feature, FeatureTitle, FeatureSubTitle } from "../components/features/Feature";
import JumboContainer from "../containers/JumboContainer"
import FaqContainer from "../containers/FaqContainer"
import FooterContainer from "../containers/FooterContainer"
import HeaderContainer from "../containers/HeaderContainer";

const Home = () => {
    return(
    <>
    <HeaderContainer>
    <Feature>
        <FeatureTitle>Unlimited movies, TV shows and more.</FeatureTitle>
        <FeatureSubTitle>Watch anywhere. Cancel anytime.</FeatureSubTitle>

        <EmailForm>
            <EmailFormText>Ready to watch? Enter your email to create or restart your membership.</EmailFormText>
            <EmailFormBreak/>
            <EmailFormInput placeholder="Email Address"/>
            <EmailFormButton>Get Started</EmailFormButton>
        </EmailForm>
        
    </Feature>

    
    </HeaderContainer>
        <JumboContainer/>
        <FaqContainer/>
        <FooterContainer/>
    
    </>
)}

export default Home;