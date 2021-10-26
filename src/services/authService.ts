import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ILoginResponse, IUser } from "../models/userModel";
import { logout, setAuthUser, setGlobalLoading } from "../store/slices/auth";
import { getTokenFromLocalStorage, setTokenToLocalStorage, TokenType } from "../utils/localStorage";
import { baseQuery } from "./config/query";

export const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        fetchLogin: build.mutation<IUser, { email: string, password: string }>({
            query: ({ email, password }) => ({
                url: "/security-server/auth/login",
                method: "POST",
                body: { email, password }
            }),
            transformResponse(response: ILoginResponse) {
                setTokenToLocalStorage(TokenType.ACCESS, response.accessToken);
                setTokenToLocalStorage(TokenType.REFRESH, response.refreshToken);
                return parseJwt<IUser>(response.accessToken);
            },
            async onQueryStarted(arg, api) {
                try {
                    const { data } = await api.queryFulfilled;
                    api.dispatch(setAuthUser(data));
                } catch (e) {
                    api.dispatch(setAuthUser(null));
                }
            }
        }),
        fetchProfile: build.query<void, void>({
            query: () => ({
                url: "/security-server/auth/profile",
                method: "GET",
                validateStatus: (_, data) => !data.error
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                if (!getTokenFromLocalStorage(TokenType.ACCESS)) {
                    dispatch(setGlobalLoading(false));
                    return;
                }
                dispatch(setGlobalLoading(true));
                try {
                    await queryFulfilled;
                    const user = parseJwt<IUser>(getTokenFromLocalStorage(TokenType.ACCESS)!);
                    dispatch(setAuthUser(user));
                } catch (e) {
                    dispatch(logout());
                } finally {
                    dispatch(setGlobalLoading(false));
                }
            }
        })
    })
});

export const parseJwt = <T>(token: string): T => {

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+")
                            .replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64)
    .split("")
    .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0)
                              .toString(16)).slice(-2);
    })
    .join(""));

    return JSON.parse(jsonPayload);
};