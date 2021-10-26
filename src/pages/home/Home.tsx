import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { testApi } from "../../services/testService";

const Home: FC = () => {
    testApi.useFetchTestQuery(undefined, { pollingInterval: 3000 });
    return (
        <Box sx={ { p: 2 } }>
            <Typography variant={ "h5" }>Projects page</Typography>
        </Box>
    );
};

export default Home;