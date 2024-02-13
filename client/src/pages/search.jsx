import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../assets/sa-logo-black.svg';
import SearchBar from '../components/searchbar';

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
    };
    return (
        <Container component="main" maxWidth="xs" sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          marginTop: '-64px',
        }}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="logo" />
            <Typography component="h1" variant="h3">
              Search
            </Typography>
            <SearchBar />
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 5 }}
            >
              {'Copyright © '}
              Stock Attack 
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      );    
}

export default Search;