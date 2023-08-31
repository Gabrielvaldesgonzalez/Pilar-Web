import {DrawerHeader, SideBar} from "./SideBar";
import {TopBar} from "./TopBar";
import {Box} from "@mui/material";
import * as React from "react";
import {ReactNode, useState} from "react";
import {styled} from "@mui/material/styles";

interface Props {
    children: ReactNode
    menuTitleSelected?: string
}

const Main = styled(
    'main',
    {
        shouldForwardProp: (prop) => prop !== 'open'
    })<{ open: boolean }>
(({theme, open}) => ({
    flexGrow: 1,
    backgroundColor:'#f6f6f6',
    padding: theme.spacing(3),
    paddingTop:theme.spacing(6),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));


export const drawerWidth = 240

export function Layout({children, menuTitleSelected}: Props) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsSideBarOpen(true);
    };

    const handleDrawerClose = () => {
        setIsSideBarOpen(false);
    };

    return (
        <Box sx={{display: 'flex', backgroundColor: '#f6f6f6'}}>
            <TopBar
                handleDrawerOpen={handleDrawerOpen}
                menuTitleSelected={menuTitleSelected}
                isSideBarOpen={isSideBarOpen}
            />
            <SideBar
                handleDrawerClose={handleDrawerClose}
                open={isSideBarOpen}
            />
            <Main open={isSideBarOpen} >
                <Box sx={{backgroundColor: 'white', boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.1)'}}>
                    {children}
                </Box>
            </Main>
        </Box>
    )
}