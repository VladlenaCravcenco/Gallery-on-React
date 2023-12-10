import Cookies from 'universal-cookie';

export default function CookieHelper(getSet, cookieName, value = "") {

    const cookies = new Cookies();

    if(getSet === "get"){
        const response = cookies.get(cookieName);
        return response;
    }else if(getSet === "set"){
        cookies.set(cookieName, value);   
    }else{ // if prop is 'remove'
        cookies.remove(cookieName);   
    }
}