import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'


const useRoutesAuth = (goTo) => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const mustBeLogged = () => {
        if(!token) navigate(goTo);
        else return;
    }

    const mustBeUnlogged = () => {
        if(token) navigate(goTo);
        else return;
    }

    return {mustBeLogged, mustBeUnlogged};
};

export default useRoutesAuth;