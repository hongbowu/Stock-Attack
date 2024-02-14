import * as React from 'react';
import { CssBaseline, Box, Container, Typography, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Footer = () => {
    return(
        <footer>
           <ThemeProvider theme={darkTheme}>
           <CssBaseline />
            <Paper sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                width: '100%'
                }} component="footer" square variant="outlined">
                    <Container maxWidth="lg">
                        <Box sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            m:1
                        }}>
                            <Typography variant="body2" color="text.secondary">
                            {'Copyright © '}
                            Stock Attack {new Date().getFullYear()}
                            {'.'}
                            </Typography>
                        </Box>
                    </Container>
                </Paper>
           </ThemeProvider>
        </footer>
    );
};

export default Footer;

