import * as React from 'react';

function Wrapper (props: {children: React.ReactElement}) {
   return (
        <div className="wrapper">
            {props.children}
        </div>
   );
}

export default Wrapper;