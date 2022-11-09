import * as React from 'react';
import { useEffect, useState } from 'react';
import linkArrow from '../../assets/images/whiteLinkArrow.svg';
import telegramIcon from '../../assets/images/telegramIcon.svg';
import whatsAppIcon from '../../assets/images/whatsAppIcon.svg';
import emailIcon from '../../assets/images/emailIcon.svg';
import ContactButton from './ContactButton';

interface Props {
    isOpenMenu: boolean
    translate: (value: string) => string,
    onNavClick: () => void
}
interface State {
    droprightMenuHeight: number
}
function DroprightMenu(props: Props) {
    const { translate, isOpenMenu, onNavClick } = props
    const [menuHeight, setMenuHeight] = useState<number>(100);
    const [contactsBlocksOffset, setContactsBlocksOffset] = useState<number>(-200);

    useEffect(() => {
        closeMenu();
        openMenu();
    }, [isOpenMenu]);
    function closeMenu() {
        if (menuHeight !== 0) {
            setMenuHeight(0);
            setContactsBlocksOffset(-200);
        }
    }
    function openMenu() {
        if (menuHeight === 0) {
            setMenuHeight(100);
            setTimeout(() => {
                setContactsBlocksOffset(0);
             }, 300)
        }
    }
    return (
        <div className="dropright_menu" style={{ width: menuHeight + '%' }}>
            <div className="header_links">
                <nav onClick={onNavClick}>
                    <a href="#portfolio">{translate("PROJECTS")}</a>
                    <a href="#skills">{translate("SKILLS")}</a>
                    <a href="#contacts">{translate("CONTACTS")}</a>
                </nav>
                <a href="https://github.com/DenisVishnevski" target="_blank">
                    <h3>GITHUB</h3>
                    <img src={linkArrow} alt="Мой GitHub" />
                </a>
            </div>
            <div className="contacts_block" style={{bottom: contactsBlocksOffset}}>
                <ContactButton icon={telegramIcon} title={"Telegram"} link="https://t.me/Vishnevski0" />
                <ContactButton icon={whatsAppIcon} title={"WhatsApp"} link="https://api.whatsapp.com/send?phone=995598896004" />
                <ContactButton icon={emailIcon} title={"Email"} link="mailto:vishnevski001@gmail.com" />
            </div>
        </div>
    );

}

export default DroprightMenu;