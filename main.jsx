import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RestCountriesApp } from './src/RestCountriesApp';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RestCountriesApp />
  </React.StrictMode>
);

//----------------------------------------------
// import { createRoot } from 'react-dom/client';

// import { App } from './src/App';

// const root = createRoot(document.getElementById('app'));

// root.render(
//   <App />
// );
