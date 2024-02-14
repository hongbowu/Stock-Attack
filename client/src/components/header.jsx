import * as React from 'react';
import { CssBaseline, Box, Container, Typography, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../../public/sa-logo.svg';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Header = () => {
    return(
        <header>
           <ThemeProvider theme={darkTheme}>
           <CssBaseline />
            <Paper sx={{
                marginBottom: 'calc(2% + 10px)',
                width: '100%',
                top: 0,
                padding: 1
                }} component="header" square variant="outlined">
                    <Container maxWidth="lg">
                        <Box sx={{
                            flexGrow: 1,
                            justifyContent: "start",
                            display: "flex",
                            m:1,
                        }}>
                            <img src={logo} alt="logo" style={{ maxWidth: '2%', height: 'auto' }} />
                            <Typography variant="body2" color="text.secondary" sx={{ px:2 }} >
                                Stock Attack
                            </Typography>
                        </Box>
                    </Container>
                </Paper>
           </ThemeProvider>
        </header>
    );
};

export default Header;

