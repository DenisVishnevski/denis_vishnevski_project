import * as React from 'react';
import '../../scss/UI/GithubButton.scss';
import linkArrow from '../../assets/images/linkArrow.svg';

function GithubButton(props: {link: string}) {
    return (
        <a className="github_button" href={props.link} target="_blank">
            <h3>GITHUB</h3>
            <img src={linkArrow} alt="Мой GitHub" />
        </a>
    );
}

export default GithubButton;