import * as React from 'react';
import { useEffect, useState } from 'react';
import { buttonsArray, layoutingBlocksArray, moreBlocksArray, programmingBlocksArray } from '../data/skills';
import '../scss/Skills.scss';
import RadioButton from './UI/RadioButton';

function Skills(props: { translate: (value: string) => string }) {
    const translate = props.translate;

    const [blocksArray, setBlocksArray] = useState<object[]>(layoutingBlocksArray);
    const [blocksStyle, setBlocksStyle] = useState<React.CSSProperties>({
        opacity: 0,
        top: 20 + 'px'
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleScroll() {
        if (window.scrollY > 1000) {
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
    function switchTab(event: any) {
        setBlocksStyle({
            transitionDuration: '0s',
            opacity: 0,
            top: 20 + 'px'
        });
        switch (event.target.value) {
            case 'Layouting':
                setBlocksArray(layoutingBlocksArray);
                break;
            case 'Programming':
                setBlocksArray(programmingBlocksArray);
                break;
            case 'More':
                setBlocksArray(moreBlocksArray);
                break;


        }
        setTimeout(() => {
            setBlocksStyle({
                transitionDuration: '.5s',
                opacity: 1,
                top: 0
            });
        }, 1)

    }
    return (
        <article>
            <h2 id='skills'>{translate("Skills")}</h2>
            <div className="skill__buttons">
                {buttonsArray.map((button: any, index) =>
                    <RadioButton
                        onChange={switchTab}
                        key={index} translate={translate}
                        name='slills' id={index}
                        isChecked={button.isChecked}>
                        {button.value}
                    </RadioButton>
                )}
            </div>
            <div className="skills__blocks" style={blocksStyle}>
                {blocksArray.map((block: any) =>
                    <div key={block.title} className="skill__block">
                        <div className="title_block">
                            <h3>{block.title}</h3>
                            <div className="point" style={{ backgroundColor: block.titleColor }}>
                                <div className="white_point"></div>
                            </div>
                        </div>
                        <div className="description_block">
                            <p>
                                {translate(block.description)}
                                <a href={block.link}>{translate(block.linkTitle)}</a>
                                {translate(block.description2)}
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </article>
    );
}

export default Skills;