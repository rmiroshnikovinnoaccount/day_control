import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/userModel";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], undefined>({
            query: () => ({
                url: "/users"
            })
        }),
        fetchCreateUser: build.mutation<IUser, IUser>({
            query: (user: IUser) => ({
                url: "/users",
                method: "POST",
                body: user
            })
        })
    })
});