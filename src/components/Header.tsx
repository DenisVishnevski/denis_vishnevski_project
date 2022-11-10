import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import '../scss/Header.scss';
import HeaderSkills from './UI/HeaderSkills';
import reactIcon from '../assets/images/reactIcon.svg';
import jstIcon from '../assets/images/jsIcon.svg';
import tsIcon from '../assets/images/tsIcon.svg';
import scrollArrow from '../assets/images/scrollArrow.svg';
import GithubButton from './UI/GithubButton';
import i18next from '../i18next';
import HamburgerMenu from './UI/HamburgerMenu';
import { relative } from 'path';

interface Props {
   translate: (value: string) => string,
   changeLanguage: (language: string) => void
}

function Header(props: Props) {
   const { translate, changeLanguage } = props
   const [languageIcon, setLanguageIcon] = useState<string>("EN");
   const [languageButtonOffset, setLanguageButtonOffset] = useState<number>(0);

   useEffect(() => {
      if (i18next.language === 'en') {
         setLanguageIcon('RU');
      }
   }, []);
   function switchLanguage() {
      if (languageIcon === 'EN') {
         changeLanguage('en');
         setLanguageIcon('RU');
         return;
      }
      setLanguageIcon('EN');
      changeLanguage('ru');
   }
   const languageButtonOffsetUpdate = useCallback(
      () => {
         setLanguageButtonOffset(window.innerWidth - 145);
         if (window.innerWidth >= 767) {
            hamburgerMenuIsAction(false);
         }
      },
      [],
   );
   function hamburgerMenuIsAction(isOpen: boolean) {
      if (isOpen) {
         window.addEventListener('resize', languageButtonOffsetUpdate);
         languageButtonOffsetUpdate();
      }
      else {
         window.removeEventListener('resize', languageButtonOffsetUpdate);
         setLanguageButtonOffset(0);
      }
   }
   return (
      <header>
         <div className='highest_bar'>
            <div className="header_buttons">
               <HamburgerMenu isAction={hamburgerMenuIsAction} translate={translate} />
               <button className="language_switcher" style={{ left: languageButtonOffset }} onClick={switchLanguage}>
                  {languageIcon}
               </button>
            </div>
            <div className="header_links">
               <nav>
                  <a href="#portfolio">{translate("PROJECTS")}</a>
                  <a href="#skills">{translate("SKILLS")}</a>
                  <a href="#contacts">{translate("CONTACTS")}</a>
               </nav>
               <div style={{ position: 'relative', left: languageButtonOffset, transition: 'all .7s ease-in-out' }}>
                  <GithubButton link='https://github.com/DenisVishnevski'/>
               </div>
            </div>
         </div>
         <div className="first_screen">
            <article>
               <h2>/{translate("Hi, my name is")}</h2>
               <h1>{translate("Denis Vishnevski")},<br />
                  {translate("I'm a front-end developer")}</h1>
               <div className='first_screen__items'>
                  <a href='#contacts'>{translate("Contact with me")}</a>
                  <div className="first_screen__skills">
                     <HeaderSkills icon={reactIcon} alt='React'>React</HeaderSkills>
                     <HeaderSkills icon={jstIcon} alt='React'>JavaScript</HeaderSkills>
                     <HeaderSkills icon={tsIcon} alt='React'>TypeScript</HeaderSkills>
                  </div>
               </div>
               <div className="scrollItem">
                  <div className="scroll_text">scroll</div>
                  <img src={scrollArrow} alt="Scroll" />
               </div>
            </article>

         </div>
      </header>

   );
}

export default Header;