import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles
import { GlobalStyle } from './styles/Global';

// VIEWS
import AdminLogin from './views/AdminLogin';
import ForgotPassword from './views/ForgotPassword';
import NewPassword from './views/NewPassword';

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/nueva-contrasena" element={<NewPassword/>} />                
                <Route path="/recuperar-contrasena" element={<ForgotPassword/>} />
                <Route path="/" element={<AdminLogin/>} />
            </Routes>
        </Router>
    )
}

export default App;
