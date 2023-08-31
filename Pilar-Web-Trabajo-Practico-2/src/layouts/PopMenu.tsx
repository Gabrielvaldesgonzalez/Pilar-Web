import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";

export const PopMenu = () => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const closeAccountMenu = () => {
        setIsAccountMenuOpen(false)
    };

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setIsAccountMenuOpen(true)}
                color="inherit"
                sx={{alignItems: 'flex-end'}}
            >
                <AccountCircle/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{mt:3}}
                open={isAccountMenuOpen}
                onClose={closeAccountMenu}
            >
                <MenuItem>
                    <Link to="/" style={{textDecoration:'none'}}>
                        Dashboard
                    </Link>
                </MenuItem>
            </Menu>
        </>
    )
}