import React, { FC } from "react";
import Layout from "./components/layouts/Layout";
import Routing from "./components/routes/Routing";

const App: FC = () => {
    return (
        <Layout>
            <Routing/>
        </Layout>
    );
};

export default App;