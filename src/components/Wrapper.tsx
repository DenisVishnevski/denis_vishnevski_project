import * as React from 'react';
import '../scss/Header.scss'

function Wrapper (props: {children: React.ReactElement}) {
   return (
        <div className="wrapper">
            {props.children}
        </div>
   );
}

export default Wrapper;