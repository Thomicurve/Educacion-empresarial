import Cookies from 'js-cookie';

const useCookies = () => {
    const setCookie = (key, value) => {
        return Cookies.set(key, value);
    }
    
    const getCookie = (key) => {
        return Cookies.get(key);
    }
    
    const deleteCookie = (key) => {
        return Cookies.remove(key);
    }

    return {setCookie, getCookie, deleteCookie};
};

export default useCookies;