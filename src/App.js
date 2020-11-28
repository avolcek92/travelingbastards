import React from "react";
import Registration from "./components/registration";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Profile from "./components/profile";
import Feed from "./components/feed";
import Map from "./components/map";
import CreatePost from "./components/createpost";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {
    componentDidMount() {
        var cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        });
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <Header/>
                        <div id="cursor"></div>
                        <Switch>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/registration" exact component={Registration}/>
                            <Route path="/profile" exact component={Profile}/>
                            <Route path="/feed" exact component={Feed}/>
                            <Route path="/map" exact component={Map}/>
                            <Route path="/createpost" exact component={CreatePost}/>
                        </Switch>
                        <Footer/>
                </Router>
            </div>
        )
    }
}

export default App;