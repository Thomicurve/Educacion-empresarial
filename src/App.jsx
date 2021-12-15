import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from './styles/Global';
import { AuthContextProvider } from './context/AuthContext';

// VIEWS
import AdminLogin from './views/AdminLogin';
import ForgotPassword from './views/ForgotPassword';
import NewPassword from './views/NewPassword';
import Users from './views/Users';

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/home/:section" element={<Users />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/recover-password" element={<ForgotPassword />} />
                    <Route path="/"  element={<AdminLogin/>} /> 
                </Routes>
            </Router>
        </AuthContextProvider>
    )
}

export default App;
