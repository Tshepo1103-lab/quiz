import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Provider/AuthProvider';
import ErrorBoundary from './ErrorBoundary';
import QuizProvider from './Provider/QuizProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback="There was an error!">
    <AuthProvider>
    <QuizProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </QuizProvider>
    </AuthProvider>
    </ErrorBoundary> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
