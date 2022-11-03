import * as React from 'react';
import '../../scss/UI/ContactButton.scss';

interface Props {
    icon: string,
    title: string,
    link: string
}
function ContactButton(props: Props) {
    return (
       <a href={props.link} title={props.title} className="contactButton">
            <img src={props.icon} alt={props.title} />
       </a>
    );
}

export default ContactButton;