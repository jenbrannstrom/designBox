// Login.js
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return <SignIn path="/login" routing="path" />;
};

export default Login;
