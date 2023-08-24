// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n'; // import the i18n instance from i18n.js
import { ClerkProvider } from '@clerk/clerk-react';

// You will find the Clerk Frontend API at Clerk Dashboard.
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
