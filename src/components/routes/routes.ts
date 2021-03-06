import React from "react";
import { Role } from "../../utils/roleUtils";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Home from "../../pages/home/Home";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Calendar from "../../pages/calendar/Calendar";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Settings from "../../pages/settings/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Statistics from "../../pages/statistics/Statistics";
import PieChartOutlineRoundedIcon from "@mui/icons-material/PieChartOutlineRounded";
import NewHome from "../../pages/home/NewHome";

type RouteType = {
    exact: boolean
    path: string
    Component: React.ElementType
    roles: Role[] | null
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
    title?: string
}

export const routes: RouteType[] = [
    {
        exact: true,
        Component: Home,
        path: "/",
        roles: null,
        Icon: HouseOutlinedIcon,
        title: "Главная"
    },
    {
        exact: true,
        Component: Calendar,
        path: "/calendar",
        roles: [Role.ADMIN],
        Icon: CalendarTodayIcon,
        title: "Календарь"
    },
    {
        exact: true,
        Component: Settings,
        path: "/settings",
        roles: [Role.TEST],
        Icon: SettingsOutlinedIcon,
        title: "Настройки"
    },
    {
        exact: true,
        Component: Statistics,
        path: "/statistics",
        roles: null,
        Icon: PieChartOutlineRoundedIcon,
        title: "Статистика"
    },
    {
        exact: true,
        Component: NewHome,
        path: "/statistics/:id",
        roles: null
    }
];