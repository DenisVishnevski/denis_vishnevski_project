import React from 'react';

interface Props {
icon: string,
alt: string,
children: string
}

function HeaderSkills(props: Props) {
  return (
    <div className="header_skill">
     <img src={props.icon} alt={props.alt} />
     <h3>{props.children}</h3>
    </div>
  );
}

export default HeaderSkills;
