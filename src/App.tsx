import React, { Suspense } from 'react';
import './scss/global.scss'
import './i18next';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();

  function translate(value: string) {
    return t(value);
  }
  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <Header translate={translate} changeLanguage={changeLanguage} />
          <main>
            <AboutMe translate={translate}/>
            <Skills translate={translate}/>
            <Portfolio translate={translate}/>
          </main>
          <Footer translate={translate}/>
        </Suspense>
    </div>
  );
}

export default App;
