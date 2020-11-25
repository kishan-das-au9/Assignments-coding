import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Home from "../pages/Home";
import Information from "../pages/Information";
import Footer from './Footer';

const FourZeroFour = (props) => {
    console.log(props)
    props.history.push('/');
    return (
        <Link to={'/'}><div>No Page Found</div> Go Back to home</Link>
    );
};

const Routes = () => {
    return (
        <Switch>
            <Route path="/info" exact component={Information} />
            <Route path="/Footer" exact component={Footer} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={FourZeroFour} />
        </Switch>
    );
};

export default Routes;
