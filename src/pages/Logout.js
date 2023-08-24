import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

export default function Logout() {

    const { setAuthentication } = useContext(AuthContext);
    setAuthentication(false);
    sessionStorage.clear();

    return ( < Navigate replace to="/Login" />);
}