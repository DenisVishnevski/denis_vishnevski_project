import * as React from 'react';
import { useEffect, useState } from 'react';
import { portfolioBlocks } from '../data/portfolio';
import '../scss/Portfolio.scss';
import GithubButton from './UI/GithubButton';
import Technologies from './UI/Technologies';



function Portfolio(props: { translate: (value: string) => string }) {
    const translate = props.translate;

    const [blocksStyle, setBlocksStyle] = useState<React.CSSProperties>({
        opacity: 0,
        top: 20 + 'px'
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleScroll() {
        if (window.scrollY > 1700) {
            displayBlocks();
            window.removeEventListener('scroll', handleScroll);
        }
    }
    function displayBlocks() {
        setBlocksStyle({
            opacity: 1,
            top: 0
        });
    }
    return (
        <article>
            <h2 id='portfolio'>{translate("Portfolio")}</h2>

            {portfolioBlocks.map((block: any, index: number) =>
                <div key={index} className="portfolio_block" style={blocksStyle}>
                    <div className="portfolio_description">
                        <div className="portfolio_text">
                            <h3 id={block.id}>{translate(block.title)}</h3>
                            <div className='portfolio_technologies'>
                                {block.technologies.map((technology: any) =>
                                    <Technologies key={technology.title} title={technology.title} pointColor={technology.titleColor} />
                                )}
                            </div>
                        </div>
                        <div className="portfolio_buttons">
                            <GithubButton />
                            <a href={block.websiteLink} className='portfolio_link' target="_blank">
                                {translate("Go to website")}
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_images">
                        <img src={block.desktopImage} alt="Andrey Rudenko" />
                        <img src={block.mobileImage} alt="Andrey Rudenko" />
                    </div>
                </div>)}
        </article>
    );
}

export default Portfolio;