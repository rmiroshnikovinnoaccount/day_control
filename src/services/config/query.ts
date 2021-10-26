import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { getTokenFromLocalStorage, setTokenToLocalStorage, TokenType } from "../../utils/localStorage";
import { logout } from "../../store/slices/auth";

const queryWithoutAuthHeader = fetchBaseQuery({
    baseUrl: "http://localhost:8765/doc-search"
});

const queryWithAuthHeader = fetchBaseQuery({
    baseUrl: "http://localhost:8765/doc-search",
    prepareHeaders: headers => {
        const token = getTokenFromLocalStorage(TokenType.ACCESS);
        if (token) {
            headers.set("Authorization", `Bearer ${ token }`);
        }
        return headers;
    }
});

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
    async(args, api, extraOptions: any) => {

        let query;
        if (extraOptions && extraOptions.disableToken === true) {
            query = queryWithoutAuthHeader;
        } else {
            query = queryWithAuthHeader;
        }

        let result = await query(args, api, extraOptions);

        if (result.error && result.error.status === 401) {

            const { data } = await queryWithoutAuthHeader({
                url: "/security-server/auth/refresh",
                method: "POST",
                body: { refreshToken: getTokenFromLocalStorage(TokenType.REFRESH) }
            }, api, extraOptions);

            if (data) {
                //@ts-ignore
                setTokenToLocalStorage(TokenType.ACCESS, data.accessToken);
                result = await query(args, api, extraOptions);
            } else {
                await api.dispatch(logout());
            }

        }

        return result;
    };