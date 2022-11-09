import * as React from 'react';
import { useEffect, useState } from 'react';
import { aboutMeBlocks } from '../data/aboutMe';
import '../scss/AboutMe.scss';

function AboutMe(props: { translate: (value: string) => string }) {
    const translate = props.translate
    const [blocksOffset, setBlocksOffset] = useState<any[]>(['0', '0', '0']);
    const [blocksTransition, setBlocksTransition] = useState<string>('left 1.5s ease-in-out, bottom .3s ease-in-out');

    let isBlocksOpened: boolean = false;
    let blockWidth: number = 34.5;
    const blocksOverlapDistancePercent: number = 1.8;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', openBlocks);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', openBlocks);
        }
    }, []);
    function handleScroll() {
        if (window.scrollY > 300) {
            openBlocks();
            window.removeEventListener('scroll', handleScroll);
        }
    }
    function openBlocks() {
        let newOffsetArray: any[] = [];
        for (let index = 0; index < blocksOffset.length; index++) {
            if (window.innerWidth >= 1000) {
                newOffsetArray[index] = ((blockWidth - blocksOverlapDistancePercent) * index);
            }
            else {
                newOffsetArray[index] = ((blockWidth - blocksOverlapDistancePercent) * index);
            }
        }
        setBlocksOffset(newOffsetArray);
        if (isBlocksOpened === false) {
            isBlocksOpened = true;
            setTimeout(() => {
                setBlocksTransition('bottom .3s ease-in-out');
            }, 2000)
        }
    }
    return (
        <article>
            <h2>{translate("About me")}</h2>
            <div className="about_me__blocks">
                {blocksOffset.map((offset: number, index: number) => {
                    if (window.innerWidth >= 1000) {
                        return (
                            <div key={index} style={{ width: blockWidth + '%', left: offset + '%', transition: blocksTransition }}>
                                {translate(aboutMeBlocks[index])}
                            </div>
                        )
                    }
                    return (
                        <div key={index} style={{width: '100%', transition: 'bottom .3s ease-in-out'}}>
                            {translate(aboutMeBlocks[index])}
                        </div>
                    )
                })}
            </div>
        </article>
    );
}

export default AboutMe;