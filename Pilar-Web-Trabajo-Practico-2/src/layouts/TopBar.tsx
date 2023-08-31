import * as React from 'react';
import {useState} from 'react';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {styled} from "@mui/material/styles";
import {drawerWidth} from "./Layout";
import {Box, Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";
import {PopMenu} from "./PopMenu";

interface Props {
    handleDrawerOpen(): void
    isSideBarOpen: boolean
    menuTitleSelected?: string
}

interface AppBarProps extends MuiAppBarProps {
    open: boolean;
}

const AppBar = styled(
    MuiAppBar,
    // Specifies that all props except for open should be forwarded to the underlying MuiAppBar
    {shouldForwardProp: (prop) => prop !== 'open',})<AppBarProps>(
    ({theme, open}) => ({
        color: '#2e3b4e',
        boxShadow :'0 2px 6px -1px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        '& .MuiBreadcrumbs-li .MuiTypography-root': {
            color: '#2e3b4e'
        },
        '& .MuiSvgIcon-root':{
            color: '#2e3b4e'
        },
        // define transition to Sidebar with when drawer is close
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // This conditional spread operator applies the styles inside the object only if the open prop is true.
        ...(open && {
            // calculates the width of the TopBar when the Sidebar is open. It subtracts the width of the drawer (drawerWidth) from the full width (100%) of the container.
            width: `calc(100% - ${drawerWidth}px)`,
            // define transition to Sidebar with when drawer is close
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })
);

export const TopBar = ({isSideBarOpen, handleDrawerOpen, menuTitleSelected}: Props) => {

    return (
        <AppBar position="fixed" open={isSideBarOpen}>
            <Toolbar variant="dense" >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={isSideBarOpen ? {display: 'none'} : {mr: 2, alignItems: 'flex-start'}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography sx={{fontWeight: 'bold', fontSize: '20px'}}>
                    Pilar Web
                </Typography>
                <Typography sx={{ fontSize: '16px', p:2}}>
                    |
                </Typography>
                <Box sx={{flexGrow: 1}}>

                    <Breadcrumbs separator="›" >
                        <Link to="/" style={{textDecoration:'none'}}>
                            <Typography sx={{fontWeight: 'bold'}}>
                                Dashboard
                            </Typography>
                        </Link>
                        {menuTitleSelected &&
                            <Typography sx={{fontWeight: 'bold'}}>{menuTitleSelected}</Typography>
                        }
                    </Breadcrumbs>
                </Box>
                <PopMenu/>
            </Toolbar>
        </AppBar>
    )
        ;
}