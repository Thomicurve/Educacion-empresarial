import React, { useState, useEffect } from 'react';
import Home from '../Home';
import UsersDB from '../../api/Users.json';

// Components
import TopSectionBar from '../../components/TopSectionBar';
import TableHeader from '../../components/TableHeader';


const Users = () => {
    const [allUsers, setAllUsers] = useState(UsersDB);

    return (
        <div>
            <Home>
                <TopSectionBar currentSection={'Usuarios'} />
                <TableHeader amount={allUsers.users.length} buttonText="Agregar usuario" inputText='Buscar usuario' headerText="Todos los usuarios" />
            </Home>
        </div>
    )
};

export default Users;