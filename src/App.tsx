import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Routing from "./components/routes/Routing";
import { useAppSelector } from "./hooks/redux";
import Login from "./pages/login/Login";
import { authApi } from "./services/authService";

const App: FC = () => {
    const { user, globalLoading } = useAppSelector(state => state.auth);
    authApi.useFetchProfileQuery()
    if (globalLoading) {
        return <div>Loading</div>;
    }

    if (!user) {
        return (
            <Switch>
                <Route path={ "/login" } exact>
                    <Login/>
                </Route>
                <Redirect to={ "/login" }/>
            </Switch>
        );
    }

    return (
        <Layout>
            <Routing/>
        </Layout>
    );
};

export default App;