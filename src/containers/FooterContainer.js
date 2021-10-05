import React from "react";
import { Footer, FooterRow, FooterColumn, FooterLink, FooterTitle, FooterText, FooterBreak } from "../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"


const FooterContainer = () => {
    return (
        <Footer>
            <FooterTitle>Questions? Call 000-420-069-1420</FooterTitle>
            <FooterBreak/>
            <FooterRow>
                <FooterColumn>
                    <FooterLink href="#">FAQ</FooterLink>
                    <FooterLink href="https://www.youtube.com/watch?v=OTDlbmBoFIs" target="_blank">Investor Relations</FooterLink>
                    <FooterLink href="#">Privacy</FooterLink>
                    <FooterLink href="#">Speedtest</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Help Centre</FooterLink>
                    <FooterLink href="https://www.youtube.com/watch?v=fH_vg7mSS2M" target="_blank">Jobs</FooterLink>
                    <FooterLink href="#">Cookie Preferences</FooterLink>
                    <FooterLink href="#">Legal Notices</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Accounts</FooterLink>
                    <FooterLink href="#">Ways to Watch</FooterLink>
                    <FooterLink href="https://www.youtube.com/watch?v=B9RgougnhiE" target="_blank">Corporate Information</FooterLink>
                    <FooterLink href="#">Only on Netflex</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href="#">Media Centre</FooterLink>
                    <FooterLink href="#">Terms of Uses</FooterLink>
                    <FooterLink href="https://www.youtube.com/watch?v=547FLQEjdF8" target="_blank">Contact Us</FooterLink>
                </FooterColumn>
            </FooterRow>

            <FooterBreak/>
            <FooterText>Netflex San Andreas</FooterText>
            <FooterText>The Project is made by Magnifiques. 
            My link: <a href="https://github.com/magnifiques" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faGithub} /> Github</a>
            </FooterText>
        </Footer>
    )
}

export default FooterContainer;