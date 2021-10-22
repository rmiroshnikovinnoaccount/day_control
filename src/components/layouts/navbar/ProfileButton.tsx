import React, { FC } from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import faceImage from "../../../static/images/face.png";

const ProfileButton: FC = () => {
    return (
        <Button
            color="inherit"
            sx={ { textTransform: "none" } }
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
                Miroshnikov R.
            </Typography>
        </Button>
    );
};

export default ProfileButton;