import * as React from 'react';
import { useState } from 'react';
import '../../scss/UI/HamburgerMenu.scss';
import DroprightMenu from './DroprightMenu';

interface Props {
    isAction: (isOpen: boolean) => void, 
    translate: (value: string) => string
}
function HamburgerMenu(props: Props) {
    const [classNames, setClassNames] = useState<string>("hamburger_menu");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        openMenu();
        closeMenu();
    }
    function openMenu() {
        if (isOpen === false) {
            setClassNames("hamburger_menu open");
            setIsOpen(true);
            props.isAction(true);
            document.body.style.overflow = 'hidden'
        }
    }
    function closeMenu() {
        if (isOpen) {
            setClassNames("hamburger_menu");
            setIsOpen(false);
            props.isAction(false);
            document.body.style.overflow = 'visible'
        }
    }
    return (
        <div className="header__nav_menu">
            <div className={classNames} onClick={handleClick} >
                <span></span>
            </div>

            <DroprightMenu onNavClick={handleClick} isOpenMenu={isOpen} translate={props.translate} />
        </div>
    );

}

export default HamburgerMenu;