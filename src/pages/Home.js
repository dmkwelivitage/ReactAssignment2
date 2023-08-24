import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("authenticated"));
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    if (authenticated) {
        return (
            <div>Hello</div>
        )
        //return (<div>{sessionStorage.getItem("authenticated")}</div>)
    }
    else {
        return (<Navigate replace to="/Login" />);
    };
};