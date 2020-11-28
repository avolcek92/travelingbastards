import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
                <nav className="slide-nav">

                    <Link to={"/feed"}>Feed</Link>
                    <Link to={"/map"}>Map</Link>
                    <Link to={"/profile"}>Profile</Link>
                    <Link to={"/find"}>Find</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/registration"}>Sign up</Link>
                </nav>
        );
    }
}

export default Header;