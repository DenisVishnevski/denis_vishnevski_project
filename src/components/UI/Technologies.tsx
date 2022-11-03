import * as React from 'react';

interface Props {
    title: string,
    pointColor: string,
}
function Technologies(props: Props) {
    const { title, pointColor } = props;

    return (
        <div className="technology_block">
            <div className="point" style={{backgroundColor: pointColor}}></div>
            <h4>{title}</h4>
        </div>
    );
}

export default Technologies;