import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import WorkshopsList from './WorkshopList';
import WorkshopsDetails from './WorkshopDetails';
import { Route, Switch } from 'react-router-dom';


function App(props) {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/workshops" exact >
                    <WorkshopsList />
                </Route>
                <Route path="/workshops/:id" exact component={WorkshopsDetails} />
            </Switch>
        </div>
    );
}

export default App;
