import * as React from 'react';
import { useState } from 'react';
import '../scss/Header.scss'
import HeaderSkills from './UI/HeaderSkills';
import reactIcon from '../assets/images/reactIcon.svg';
import jstIcon from '../assets/images/jsIcon.svg';
import tsIcon from '../assets/images/tsIcon.svg';
import scrollArrow from '../assets/images/scrollArrow.svg';
import linkArrow from '../assets/images/linkArrow.svg';

function Header() {
   const [language, setLanguage] = useState("EN");

   function switchLanguage () {
      if (language === 'EN') {
         setLanguage('RU');
         return;
      }
      setLanguage('EN')
   }
   return (
      <header>
         <div className='highest_bar' >
            <div className="language_switcher" onClick={switchLanguage}>
               {language}
            </div>
            <div className="header_links">
               <nav>
                  <a href="#">ПРОЕКТЫ</a>
                  <a href="#">НАВЫКИ</a>
                  <a href="#">КОНТАКТЫ</a>
               </nav>
               <a className="github_link" href="https://github.com/DenisVishnevski" target="_blank">
                  <h3>GITHUB</h3>
                  <img src={linkArrow} alt="Мой GitHub" />
               </a>
            </div>
         </div>
         <div className="first_screen">
            <article>
               <h2>/Привет, меня зовут</h2>
               <h1>Денис Вишневский, фронтенд-разработчик</h1>
               <div className='first_screen__items'>
                  <button>Свяжитесь со мной</button>
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