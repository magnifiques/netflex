import React, {useState, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

import { useHistory } from "react-router-dom";
import {Header, HeaderFrame, HeaderLogo} from "../components/header/Header";
import {Form, FormBase, FormError, FormTitle, FormText, FormTextSmall, FormLink, FormInput, FormSubmit} from "../components/SignInForm/SignInForm"
import * as ROUTES from "../constants/Routes"
import logo from "../logo.svg"
import { Footer, FooterRow, FooterColumn, FooterLink, FooterTitle, FooterBreak, FooterText } from "../components/footer/Footer";
import {FirebaseContext} from "../contexts/FirebaseContext"



const SignIn = () => {

    let history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // check functions for email and password

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        //Firebase working section:

        return firebase.auth().signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            //push it to browse page
            history.push('/browse');
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    return(
        <>
        <Header>
        <HeaderFrame>
            <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflex"/>
        </HeaderFrame>
            <Form>
                <FormTitle>Sign In</FormTitle>
                {error && <FormError>{error}</FormError>}
                <FormBase onSubmit={handleSignIn} method="POST">
                    <FormInput placeholder="Email Address" 
                    value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)}/>
                
                    <FormInput placeholder="Password"
                    type="password" 
                    autoComplete="off"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}/>
                    
                    <FormSubmit disabled={isInvalid} type="submit">
                        Sign In
                    </FormSubmit>

                    <FormText>New to Netflex? <FormLink to={ROUTES.SIGN_UP}>Sign Up Now! </FormLink> </FormText>
                    <FormTextSmall>This page is protected by Jesse's gotchaBIATCH to ensure you're not a bot or retard. 
                        <a href="https://www.youtube.com/watch?v=OryoY4mBuOQ" rel="noreferrer" target="_blank">Learn More</a>
                    </FormTextSmall>
                
                </FormBase>
            </Form>
        </Header>
        <Footer>
        <FooterTitle>Questions? Call 000-420-069-1420</FooterTitle>
            <FooterBreak/>
            <FooterRow>
                <FooterColumn>
                    <FooterLink href="#">FAQ</FooterLink>
                    <FooterLink href="#">Cookie Preferences</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Help Centre</FooterLink>
                    <FooterLink href="#">Corporate Information</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Terms Of Services</FooterLink>   
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Privacy</FooterLink>
                </FooterColumn>
            </FooterRow>
            <FooterBreak/>
            <FooterText>Netflex San Andreas</FooterText>
            <FooterText>The Project is made by Magnifiques. 
            My link: <a href="https://github.com/magnifiques" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faGithub} /> Github</a>
            </FooterText>
        </Footer>
        </>
)}

export default SignIn