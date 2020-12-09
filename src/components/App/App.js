'use strict';
import React, { useEffect, useRef } from 'react';
import GlobalStyles from '../../assets/global.styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Wrapper, NavMenu } from './appStyle';
import Searcher from '../elements/Searcher';
import Home from '../HomePage';
import Details from '../DetailPanel';
import NavPanel from '../elements/NavPanel';

const App = ({ setInitiaDataRequest }) => {
    useEffect(function getData() {
        setInitiaDataRequest();
    }, []);
    const outSideClickRef = useRef();
    
    return (
        <Wrapper>
            <Router>
                <NavMenu>
                    <NavPanel />
                    <Searcher ref={outSideClickRef} />
                </NavMenu>
                <Switch>
                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
            <GlobalStyles />
        </Wrapper>
    );
};

export default App;