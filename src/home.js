import React from 'react';
import ReactDOM from 'react-dom/client';

import Speaker from './fun';
import Class from './class';

function Home()
{
    return <React.Fragment>
        <body>
            <div className='class1'>
                <Class/>
                <Speaker/>
            </div>
        </body>

        
    </React.Fragment>
}
export default Home;