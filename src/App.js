import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";

function App() {
    return (
        <Switch>
            <Route path="/">
                <HomeComponent />
            </Route>
        </Switch>
    );
}

export default App;
