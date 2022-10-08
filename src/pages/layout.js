import { AppBar, Badge, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
const pages = [
   { name: 'Here Map Container', path: '/' },
   { name: 'Polygon Draw', path: '/polygondraw' },
   { name: 'Point in Polygon', path: '/useMarkerInPolygon' },
];
const Layout = ({ children }) => {
   console.log('BURADAA');
   const [anchorElNav, setAnchorElNav] = useState(null);
   const navigate = useNavigate();
   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleCloseNavMenu = (path) => {
      navigate(path);
      setAnchorElNav(null);
   };

   return (
      <>
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     variant="h6"
                     noWrap
                     component="a"
                     href="/"
                     sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                     }}
                  >
                     @akaribrahim/here-maps-drawing
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
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
                        {pages.map(({ name, path }) => (
                           <MenuItem key={path} onClick={() => handleCloseNavMenu(path)}>
                              <Typography textAlign="center">{name}</Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                     {pages.map(({ name, path }) => (
                        <Button
                           variant="text"
                           sx={{ mx: 1, color: 'white', px: 3 }}
                           onClick={() => {
                              navigate(path);
                           }}
                        >
                           {name}
                        </Button>
                     ))}
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                     <IconButton
                        size="large"
                        aria-label="go to github page"
                        color="inherit"
                        target="_blank"
                        href="https://github.com/akaribrahim/here-maps-drawing"
                     >
                        <GitHubIcon />
                     </IconButton>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <Container maxWidth="xl" sx={{ mt: 3 }}>
            {children}
         </Container>
      </>
   );
};

export default Layout;
