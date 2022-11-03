import * as React from 'react';
import { useEffect, useState } from 'react';
import { aboutMeBlocks } from '../data/aboutMe';
import '../scss/AboutMe.scss';

function AboutMe(props: { translate: (value: string) => string }) {
    const translate = props.translate
    const [blocksOffset, setBlocksOffset] = useState<number[]>([0, 0, 0]);

    const blockWidth: number = 420;
    const blocksOverlapDistance: number = 22;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleScroll() {
        if (window.scrollY > 300) {
            openBlocks();
            window.removeEventListener('scroll', handleScroll);
        }
    }
    function openBlocks() {
        let newOffsetArray: number[] = [];
        for (let index = 0; index < blocksOffset.length; index++) {
            newOffsetArray[index] = (blockWidth - blocksOverlapDistance) * index;
        }
        setBlocksOffset(newOffsetArray);
    }
    return (
        <article>
            <h2>{translate("About me")}</h2>
            <div className="about_me__blocks">
                {blocksOffset.map((offset: number, index: number) => 
                    <div key={index} style={{ left: offset}}>
                        {translate(aboutMeBlocks[index])}
                    </div>
                )}
            </div>
        </article>
    );
}

export default AboutMe;