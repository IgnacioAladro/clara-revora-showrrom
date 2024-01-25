import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD8KNVxRGFTgLeCTNEiQtVLD62b-RuNFXo",
  authDomain: "clara-revora-showroom-c0262.firebaseapp.com",
  projectId: "clara-revora-showroom-c0262",
  storageBucket: "clara-revora-showroom-c0262.appspot.com",
  messagingSenderId: "476223284836",
  appId: "1:476223284836:web:bc42c8f6d577a55c5a2171"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
