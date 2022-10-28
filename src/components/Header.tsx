import * as React from 'react';
import { useState } from 'react';
import '../scss/Header.scss';
import HeaderSkills from './UI/HeaderSkills';
import reactIcon from '../assets/images/reactIcon.svg';
import jstIcon from '../assets/images/jsIcon.svg';
import tsIcon from '../assets/images/tsIcon.svg';
import scrollArrow from '../assets/images/scrollArrow.svg';
import linkArrow from '../assets/images/linkArrow.svg';

interface Props {
   translate: (value: string) => string,
   changeLanguage: (language: string) => void
}

function Header(props: Props) {
   const {translate, changeLanguage} = props
   const [languageIcon, setLanguageIcon] = useState<string>("EN");

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
            <div className="language_switcher" onClick={switchLanguage}>
               {languageIcon}
            </div>
            <div className="header_links">
               <nav>
                  <a href="#">{translate("PROJECTS")}</a>
                  <a href="#">{translate("SKILLS")}</a>
                  <a href="#">{translate("CONTACTS")}</a>
               </nav>
               <a className="github_link" href="https://github.com/DenisVishnevski" target="_blank">
                  <h3>GITHUB</h3>
                  <img src={linkArrow} alt="Мой GitHub" />
               </a>
            </div>
         </div>
         <div className="first_screen">
            <article>
               <h2>/{translate("Hi, my name is")}</h2>
               <h1>{translate("Denis Vishnevski")},<br />
                  {translate("I'm a front-end developer")}</h1>
               <div className='first_screen__items'>
                  <button>{translate("Contact with me")}</button>
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