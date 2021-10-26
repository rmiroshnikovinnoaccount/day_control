import React, { FC } from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import faceImage from "../../../static/images/face.png";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { logout } from "../../../store/slices/auth";

const ProfileButton: FC = () => {

    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    return (
        <Button
            color="inherit"
            sx={ { textTransform: "none" } }
            onClick={ () => dispatch(logout()) }
        >
            <Divider
                orientation={ "vertical" }
                flexItem
                sx={ {
                    m: theme => theme.spacing(0, 0.5)
                } }
            />
            <Avatar
                src={ faceImage }
                sx={ {
                    width: 24,
                    height: 24,
                    m: theme => theme.spacing(0, 0.5)
                } }
            />
            <Typography
                sx={ {
                    fontWeight: 500,
                    color: theme => theme.appPalette.mainColor
                } }
            >
                {
                    `${ user!.lastName!.charAt(0).toUpperCase() + user?.lastName?.slice(1) } ${ user?.firstName?.charAt(0).toUpperCase() }.`
                }
            </Typography>
        </Button>
    );
};

export default ProfileButton;