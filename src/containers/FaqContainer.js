import React from "react";
import {Faq, FaqTitle, FaqItem, FaqHeader, FaqBody} from "../components/faqsection/Faq";
import faqdata from "../fixtures/faqs.json"
import {EmailForm, EmailFormInput, EmailFormButton, EmailFormText, EmailFormBreak} from "../components/emailform/EmailForm"


const FaqContainer = () => {
    return(
    <Faq>
        <FaqTitle>Frequently Asked Questions</FaqTitle>
            {faqdata.map((item) => (
                <FaqItem key={item.id}>
                    <FaqHeader>{item.header}</FaqHeader>
                    <FaqBody>{item.body}</FaqBody>
                </FaqItem>
            ))}
        <FaqItem/>
        
        <EmailForm>
            <EmailFormText>Ready to watch? Enter your email to create or restart your membership.</EmailFormText>
            <EmailFormBreak/>
            <EmailFormInput placeholder="Email Address"/>
            <EmailFormButton>Get Started</EmailFormButton>
        </EmailForm>

    </Faq>
    )
}

export default FaqContainer;