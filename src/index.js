import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Car from './fun';
import img from './download.jpg';
import Car1 from './class';
import Page from './page2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
<React.StrictMode>
<Car1/>
<img src={img}></img>
<Car/>

</React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
