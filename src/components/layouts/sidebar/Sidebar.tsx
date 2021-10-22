import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PieChartOutlineRoundedIcon from "@mui/icons-material/PieChartOutlineRounded";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { LightTooltip } from "../../UI/LightTooltip";
import { useHistory, useLocation } from "react-router-dom";
import { flexStyles } from "../../../utils/styleUtils";

type SidebarProps = {
    sideBarIsOpen: boolean
}

const items = [
    {
        Icon: HouseOutlinedIcon,
        title: "Главная",
        path: "/"
    },
    {
        Icon: PieChartOutlineRoundedIcon,
        title: "Статистика",
        path: "/statistics"
    },
    {
        Icon: CalendarTodayIcon,
        title: "Календарь",
        path: "/calendar"
    },
    {
        Icon: SettingsOutlinedIcon,
        title: "Настройки",
        path: "/settings"
    }
];

const Sidebar: FC<SidebarProps> = ({ sideBarIsOpen }) => {

    const history = useHistory();
    const location = useLocation();

    return (
        <Box
            sx={ {
                width: sideBarIsOpen ? "170px" : "72px",
                padding: theme => theme.spacing(1, 2),
                transition: "all 0.5s ease"
            } }
        >
            <Box component={ "ul" }>
                {
                    items.map(value => {
                        const Icon = value.Icon;
                        return (
                            <LightTooltip
                                key={ value.title }
                                title={ value.title }
                                placement="right"
                                disableHoverListener={ sideBarIsOpen }
                            >
                                <Box
                                    onClick={ () => history.push(value.path) }
                                    component={ "li" }
                                    sx={ {
                                        mt: theme => theme.spacing(1),
                                        overflow: "hidden"
                                    } }
                                >
                                    <Box
                                        sx={ {
                                            ...flexStyles("center"),
                                            borderRadius: 2,
                                            p: theme => theme.spacing(1),
                                            cursor: "pointer",
                                            ":hover": {
                                                background: "#dae0ec"
                                            },
                                            background: location.pathname === value.path ? "#dae0ec" : undefined
                                        } }
                                    >
                                        <Icon sx={ { color: theme => theme.appPalette.mainColor } }/>
                                        <Typography
                                            sx={ {
                                                ml: theme => theme.spacing(1),
                                                whiteSpace: "nowrap",
                                                transition: "0.35s",
                                                opacity: sideBarIsOpen ? 1 : 0,
                                                pointerEvents: sideBarIsOpen ? "auto" : "none"
                                            } }
                                        >
                                            { value.title }
                                        </Typography>
                                    </Box>
                                </Box>
                            </LightTooltip>
                        );
                    })
                }
            </Box>
        </Box>
    );
};

export default Sidebar;