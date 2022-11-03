import * as React from 'react';
import { useEffect, useState } from 'react';
import '../scss/Header.scss';
import HeaderSkills from './UI/HeaderSkills';
import reactIcon from '../assets/images/reactIcon.svg';
import jstIcon from '../assets/images/jsIcon.svg';
import tsIcon from '../assets/images/tsIcon.svg';
import scrollArrow from '../assets/images/scrollArrow.svg';
import GithubButton from './UI/GithubButton';
import i18next from '../i18next';

interface Props {
   translate: (value: string) => string,
   changeLanguage: (language: string) => void
}

function Header(props: Props) {
   const { translate, changeLanguage } = props
   const [languageIcon, setLanguageIcon] = useState<string>("EN");

   useEffect(() => {
      if (i18next.language === 'en'){
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
   return (
      <header>
         <div className='highest_bar' >
            <button className="language_switcher" onClick={switchLanguage}>
               {languageIcon}
            </button>
            <div className="header_links">
               <nav>
                  <a href="#portfolio">{translate("PROJECTS")}</a>
                  <a href="#skills">{translate("SKILLS")}</a>
                  <a href="#contacts">{translate("CONTACTS")}</a>
               </nav>
               <GithubButton />
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