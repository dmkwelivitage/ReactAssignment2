import { Box,AppBar,Toolbar,Typography,Button,IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const auths = ['Register', 'Login'];
const loggedauths = ['Register' , 'Logout'];
const pages = ['Home', 'About Us', 'Data'];

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const { authentication } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };
    const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("authenticated"));
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${page}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    {authentication ? <Box sx={{ display: { xs: 'none', md: 'flex', alignSelf: 'flex-end' } }}>
                        {loggedauths.map((loggedauth) => (
                            <Button
                                key={loggedauth}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${loggedauth}`}>
                                    {loggedauth}
                                </Link>
                            </Button>
                        ))}
                    </Box> : <Box sx={{ display: { xs: 'none', md: 'flex', alignSelf: 'flex-end' } }}>
                        {auths.map((auth) => (
                            <Button
                                key={auth}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${auth}`}>
                                    {auth}
                                </Link>
                            </Button>
                        ))}
                    </Box>}
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {auths.map((auth) => (
                            <MenuItem key={auth} onClick={handleOpenNavMenu}>
                                <Typography textAlign={"left"}>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${auth}`}>
                                        {auth}
                                    </Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;