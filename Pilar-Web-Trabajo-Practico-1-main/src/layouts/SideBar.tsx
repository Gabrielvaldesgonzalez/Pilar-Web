import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {drawerWidth} from "./Layout";


import {Menu} from "./Menu";

interface Props {
    handleDrawerClose(): void
    open: boolean
}



export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const SideBar = ({handleDrawerClose, open}: Props) => {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: 'rgb(234, 27, 54)',
                    color: 'white',
                },
                '& .MuiSvgIcon-root': {
                    color: 'white',
                    fontSize: '19px',
                },
                '& .MuiListItemIcon-root': {
                    minWidth: '30px',
                },
                '& .MuiListItem-root': {
                    padding: '0 16px'
                }, '& .MuiDivider-root': {
                    backgroundColor: 'white',
                    width: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },

            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <img src="/images/logo.png" width="125" style={{ display: 'block', margin: '0 auto' }} />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List sx={{pt:0}}>
               <Menu/>
            </List>
        </Drawer>
    );
}