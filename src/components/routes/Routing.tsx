import React, { FC } from "react";
import Calendar from "../../pages/calendar/Calendar";
import Settings from "../../pages/settings/Settings";
import Statistics from "../../pages/statistics/Statistics";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../pages/home/Home";

const Routing: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/calendar">
                <Calendar/>
            </Route>
            <Route exact path="/settings">
                <Settings/>
            </Route>
            <Route exact path="/statistics">
                <Statistics/>
            </Route>
            <Redirect to={ "/" }/>
        </Switch>
    );
};

export default Routing;