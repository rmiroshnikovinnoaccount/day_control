import { useAppSelector } from "../hooks/redux";
import { useCallback } from "react";

export enum Role {
    ADMIN = "ADMIN",
    SUPPORT = "SUPPORT",
    TEST = "TEST"
}

export const useRoleManager = () => {
    const user = useAppSelector(state => state.auth.user);

    return useCallback(
        (roles: Role[] | null) => {

            if (!roles) {
                return true;
            }

            if (!user || user?.roles?.length === 0) {
                return false;
            }

            let result = false;

            user.roles.forEach(role => {
                if (
                    roles.map(v => v.toString())
                         .includes(role)
                ) {
                    result = true;
                }
            });

            return result;
        },
        [user]
    );
};