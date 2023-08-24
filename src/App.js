// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProjectList from './components/ProjectList';
import Login from './components/Login';
import Register from './components/Register';
import HomeProject from './components/HomeProject';
import OfficeProject from './components/OfficeProject';
import Navbar from './components/Navbar';
import { SignedIn, SignedOut, RedirectToSignIn, useClerk } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const App = () => {
  // Using the useTranslation hook from react-i18next to access the t function for translation
  const { t, i18n } = useTranslation();

  // Define Layout component
  const Layout = ({ children }) => {
    // Layout component wraps its children with navigation and other common elements
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };

  // Render the application with routing, Layout, and Clerk applied
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/projects" element={useClerk().currentUser ? <ProjectList /> : <RedirectToSignIn />} />
          <Route path="/login" element={<SignedOut><Login /></SignedOut>} />
          <Route path="/register" element={<SignedOut><Register /></SignedOut>} />
          <Route path="/home-project" element={<SignedIn><HomeProject /></SignedIn>} />
          <Route path="/office-project" element={<SignedIn><OfficeProject /></SignedIn>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
