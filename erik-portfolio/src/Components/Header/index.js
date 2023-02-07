
// Dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// Variables
const drawerWidth = 240;
const navItems = ['Resume', 'About', 'Projects', 'Contact'];


export default function Header(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link to='/portfolio' style={{ textDecoration: 'none', color: 'inherit'}}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Erik
            </Typography>
        </Link>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton href={`/${item}`} sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ backgroundColor: 'black'}} component="nav">
            <Toolbar style={{ height: '64px'}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/portfolio'>Erik</Link>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button className='navLinks' key={item} sx={{ color: '#fff' }}>
                            <Link style={{ color: 'white', textDecoration: 'none' }} to={`/${item}`}>
                                {item}
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
        </Box>
        <Box component="main">
            <Toolbar />
        </Box>
        </Box>
    );
}