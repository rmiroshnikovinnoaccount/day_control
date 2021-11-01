import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./config/query";
import { ISchemesStatus } from "../models/userModel";

export const testApi = createApi({
    reducerPath: "testAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        fetchTest: build.query<ISchemesStatus[], void>({
            query: () => ({
                url: `/doc-search-migration-server/load-datasource-schemas/${ 1 }`,
                method: "GET"
            })
        })
    })
});