import React, { useState, useEffect } from 'react';
import { HomeContainer } from './style';
import { useParams, useNavigate } from 'react-router-dom';
import Users from '../../api/Users.json';
import useRoutesAuth from '../../hooks/useRoutesAuth';

// Components
import Navbar from '../../components/Navbar';
import LeftBar from '../../components/LeftBar';
import TopSectionBar from '../../components/TopSectionBar';

// Views

const sections = ['users', 'dashboard', 'reports', 'configuration']

const Home = ({children}) => {
    const [users, setUsers] = useState([]);
    const { isNotLogged } = useRoutesAuth('/');
    const { section } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const currentRoute = sections.includes(section);
        if(!currentRoute) return navigate('/home/users');

        isNotLogged();
        setUsers(Users.users);
    }, []);

    return (
        <main style={{backgroundColor: '#FCFCFC', height: '100vh'}}>
            <Navbar/>
            <HomeContainer>
                <LeftBar/>
                {children}
            </HomeContainer>
        </main>
    )
};

export default Home;