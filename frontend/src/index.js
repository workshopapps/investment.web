import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as atatus from 'atatus-spa';
import * as atatus from 'atatus-spa';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import reportWebVitals from './reportWebVitals.js';
import './index.css';
import App from './App';

// atatus.config('ef7c4c980d4b454f9beae7ad07ee545c').install();
// atatus.notify(new Error('Test Atatus Setup'));
atatus.config('ef7c4c980d4b454f9beae7ad07ee545c').install();
atatus.notify(new Error('Test Atatus Setup'));

Sentry.init({
    dsn: 'https://2eca6f62796644d4aa995a7fd5c073bd@o4504281377996800.ingest.sentry.io/4504281381601280',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.5
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();
