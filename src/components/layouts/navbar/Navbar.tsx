import React, { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import NavbarSearch from "./NavbarSearch";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ProfileButton from "./ProfileButton";
import { flexStyles } from "../../../utils/styleUtils";

type HeaderProps = {
    setSideBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const controls = [
    { Icon: DarkModeOutlinedIcon },
    { Icon: AddCircleRoundedIcon },
    { Icon: NotificationsNoneRoundedIcon }
];

const Navbar: FC<HeaderProps> = ({ setSideBarIsOpen }) => {
    return (
        <Box
            sx={ {
                ...flexStyles("center", "space-between"),
                width: "100%",
                padding: theme => theme.spacing(2, 3),
                position: "relative"
            } }
        >
            <Box
                sx={ {
                    ...flexStyles("center"),
                    flexGrow: 1
                } }
            >
                <NotesRoundedIcon
                    sx={ {
                        color: theme => theme.appPalette.dark,
                        cursor: "pointer"
                    } }
                    onClick={ () => setSideBarIsOpen(prevState => !prevState) }
                />
                <Typography
                    variant="h5"
                    sx={ {
                        margin: theme => theme.spacing(0, 3),
                        fontWeight: "500",
                        color: theme => theme.appPalette.dark
                    } }
                >
                    Project Name
                </Typography>
                <NavbarSearch/>
            </Box>
            <Box sx={ flexStyles("center") }>
                {
                    controls.map((value, i) => {
                        const Icon = value.Icon;
                        return (
                            <IconButton size="small" key={ i }>
                                <Icon sx={ { color: theme => theme.appPalette.dark } }/>
                            </IconButton>
                        );
                    })
                }
                <ProfileButton/>
            </Box>
        </Box>
    );
};

export default Navbar;