import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'


const useRoutesAuth = (goTo) => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const isNotLogged = () => {
        if(!token) navigate(goTo);
        else return;
    }

    const isLogged = () => {
        if(token) navigate(goTo);
        else return;
    }

    return {isNotLogged, isLogged};
};

export default useRoutesAuth;