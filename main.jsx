import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RestCountriesApp } from './src/RestCountriesApp';

ReactDOM.createRoot(document.getElementById('app')).render(
  // <React.StrictMode>
  // <BrowserRouter basename='/rest-countries-app/'>

  <HashRouter>
    <RestCountriesApp />
  </HashRouter>

  // </BrowserRouter>
  // </React.StrictMode>
);

//----------------------------------------------
// import { createRoot } from 'react-dom/client';

// import { App } from './src/App';

// const root = createRoot(document.getElementById('app'));

// root.render(
//   <App />
// );
