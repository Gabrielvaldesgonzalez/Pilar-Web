import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {useState} from "react";
import {MenuItem} from "./Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {Collapse, List} from "@mui/material";


export const MenuItems = ({title, icon, url, children}: MenuItem) => {
    const [open, setOpen] = useState(false);

    return (
        !!children ?
            <>
                <ListItem onClick={() => setOpen((status) => !status)}>
                    <ListItemButton>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText
                            primary={title}
                            disableTypography
                        />
                    </ListItemButton>
                    {open ? <ExpandMoreIcon/> : <ChevronRightIcon/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {children.map((child, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    disablePadding
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 42,
                                            marginLeft: 3,
                                        }}
                                        href={child.url}
                                    >
                                        <ListItemText
                                            primary={child.title}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Collapse>
            </>
            :
            <>
                <ListItem key={title} disablePadding>
                    <ListItemButton component="a" href={url}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={title}/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </>
    )
}