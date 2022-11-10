import * as React from 'react';
import '../scss/Footer.scss';
import ContactButton from './UI/ContactButton';
import telegramIcon from '../assets/images/telegramIcon.svg';
import whatsAppIcon from '../assets/images/whatsAppIcon.svg';
import emailIcon from '../assets/images/emailIcon.svg';
import linkArrow from '../assets/images/whiteLinkArrow.svg';

function Footer(props: { translate: (value: string) => string }) {
    const translate = props.translate;
    return (
        <footer>
            <h2 id='contacts'>{translate("Contacts")}</h2>
            <div className="contacts_block">
                <ContactButton icon={telegramIcon} title={"Telegram"} link="https://t.me/Vishnevski0" />
                <ContactButton icon={whatsAppIcon} title={"WhatsApp"} link="https://api.whatsapp.com/send?phone=995598896004" />
                <ContactButton icon={emailIcon} title={"Email"} link="mailto:vishnevski001@gmail.com" />
            </div>
            <div className="bottom_block">
                <div className="footer_links">
                    <nav>
                        <a href="#portfolio">{translate("PROJECTS")}</a>
                        <a href="#skills">{translate("SKILLS")}</a>
                        <a href="#contacts">{translate("CONTACTS")}</a>
                    </nav>
                    <a href="https://github.com/DenisVishnevski" target="_blank">
                        <h3>GITHUB</h3>
                        <img src={linkArrow} alt="Мой GitHub" />
                    </a>
                </div>
                <h3>Дизайн сайта <a href="https://www.behance.net/11c1d013">@sanya_uiux</a></h3>
            </div>
        </footer>
    );
}

export default Footer;