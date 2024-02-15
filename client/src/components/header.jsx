import * as React from "react";
import { CssBaseline, Box, Container, Typography, Paper, Link } from "@mui/material";
import logo from "../../public/sa-logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logout from './logout';
import ProfileButton from "./profileButton";

const Header = () => {
  return (
    <header>
      <CssBaseline />
        <Paper
          sx={{
            marginBottom: "10px",
            width: "100%",
            top: 0,
            padding: 1,
            display: "flex"
          }}
          component="header"
          square
          variant="outlined"
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "start",
                display: "flex",
                my: 1,
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ maxWidth: "3%", height: "auto" }}
              />
              <Typography variant="h5" color="text.secondary" sx={{ px: 2 }}>
                Stock Attack
              </Typography>
              <Box sx={{ mx: 1, }} >
                <Logout />
              </Box>
              <Box sx={{ mx: 1, }} >
                <ProfileButton />
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "end",
                display: "flex",
                m: 1,
              }}
            >
              <Link
                href="https://github.com/hongbowu/Stock-Finder"
                rel="noopener noreferrer"
                target="_blank"
                alt="github-logo"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Box>
          </Container>
        </Paper>
    </header>
  );
};

export default Header;
