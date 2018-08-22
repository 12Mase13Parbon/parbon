import React , { Component } from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Welcome from './main/Welcome';
import Club from './main/UIcomponents/ClubRegister';
import User from './main/UIcomponents/UserRegister';
import AdminLogin from './main/admin/AdminLogin';


class RouteIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/club" component={Club} />
                    <Route path="/user" component={User} />
                    <Route path="/admin" component={AdminLogin} />
                </Switch>
            </Router>
        );
    }
}

export default RouteIndex;