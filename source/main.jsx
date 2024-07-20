import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";
import './css/style.css'
import { BrowserRouter } from "react-router-dom";


ReactDom.createRoot(document.getElementById('root')).render(
    
    
    // <h1>Welcome to react</h1>
    <BrowserRouter>  
    <App/>
    </BrowserRouter>
    

)
