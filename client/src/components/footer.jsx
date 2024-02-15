import * as React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Footer = () => {
    return(
        <footer>
            <Paper sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }}
             component="footer" square variant="outlined">
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
        </footer>
    );
};

export default Footer;

