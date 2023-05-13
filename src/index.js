// SASS
import './sass/main.sass';

// JS
import './js/main.js';

//React
import React from 'react';
import {HashRouter} from "react-router-dom";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import App from './components/app.jsx';

root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);
