import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LogoutButton from './logout';

const Nav = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6">Stock Attack</Typography>
                    </Link>
                </Box>
                <Button color="inherit" component={Link} to="/investing">Investing</Button>
                <Button color="inherit" component={Link} to="/about">Account</Button>
                <LogoutButton />
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
