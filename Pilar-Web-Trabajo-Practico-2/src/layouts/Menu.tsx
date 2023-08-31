import List from "@mui/material/List";
import * as React from "react";
import {EmotionJSX} from "@emotion/react/types/jsx-namespace";
import HomeIcon from "@mui/icons-material/Home";
import {MenuItems} from "./MenuItems";

import DescriptionIcon from '@mui/icons-material/Description';

interface MenuItemChildren {
    title: string
    url: string
}

export interface MenuItem {
    title: string
    icon: EmotionJSX.Element
    url?: string
    children?: MenuItemChildren[]
}

const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        icon: <HomeIcon/>,
        url: '/',
    },
    {
        title: "Pages",
        icon: <DescriptionIcon/>,
        children: [
            {
                title: "Todo",
                url: "/todo",
            },
            {
                title: "FetchList",
                url: "/fetch-list",
            },
        ],
    },
]

export const Menu = () => {

    return (
      <List sx={{pt: 0}}>
          {
              menuItems.map((item: MenuItem, index: number) => (
                <MenuItems key={index} {...item} />
              ))
          }
      </List>
    )
}