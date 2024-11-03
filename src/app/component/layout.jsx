'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import avatar from './avatar.png';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import TelegramIcon from '@mui/icons-material/Telegram';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import HelpIcon from '@mui/icons-material/Help';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DraftsIcon from '@mui/icons-material/Drafts';
import LogoutIcon from '@mui/icons-material/Logout';
import { log } from 'console';

const drawerWidth = 240;

function Layout(props) {
    const { window } = props;
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [isCollapse, setisCollapse] = React.useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const username = JSON.parse(localStorage.getItem("user"));
    console.log(username.username);

    React.useEffect(() => {
        if (localStorage.getItem("loggedin") !== "true") {
            router.push("/");
        }

    })
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        router.push("/");
    }

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleCollapse = () => {
        setisCollapse(!isCollapse);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Image className='rounded-full mr-2 border-2 border-black' src={avatar} alt="pic" width={40} height={40} />
                <Typography variant="h6" noWrap component="div" className='font-bold'>
                    {username.username}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {[
                    'Dashboard',
                    'Analytics',
                    'Users',
                    'Projects',
                    'Messages',
                    'Settings',
                    'Profile'
                ].map((text, index) => (
                    <ListItem key={text} disablePadding
                        onClick={() => router.push(`/${text.toLowerCase()}`)}
                    >

                        <ListItemButton>
                            <ListItemIcon  >
                                {index === 0 && <SpaceDashboardIcon />}
                                {index === 1 && <QueryStatsIcon />}
                                {index === 2 && <PeopleAltIcon />}
                                {index === 3 && <SchoolIcon />}
                                {index === 4 && <TelegramIcon />}
                                {index === 5 && <SettingsIcon />}
                                {index === 6 && <AccountCircleIcon />}

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                <ListItem disablePadding onClick={handleCollapse} >
                    <ListItemButton>
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                        {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                </ListItem>
            </List>

            <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                <List className='ml-4'>
                    {['Support', 'Contact', 'Docs'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <SupportAgentIcon />}
                                    {index === 1 && <ContactSupportIcon />}
                                    {index === 2 && <DraftsIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: 'white',
                    color: "#2F2F2F",
                }}

            >
                <Toolbar className='flex justify-between' >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='font-bold flex justify-between' variant="h6" noWrap component="div">
                        <div>
                            Dashboard
                        </div>
                    </Typography>
                    <Typography className='font-bold flex justify-between' variant="h6" noWrap component="div">
                        <div className='cursor-pointer hover:bg-gray-200 rounded-lg px-2 ' onClick={handleLogout}>
                            <LogoutIcon />
                        </div>

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <main>{children}</main>
            </Box>
        </Box>
    );
}

Layout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
    children: PropTypes.array,
};

export default Layout;
