import * as React from "react"
import {AppBar, Container, Toolbar, Box,Typography,  IconButton, Menu, MenuItem,Avatar, Button, Tooltip } from "@mui/material"

import { grey } from "@mui/material/colors";
import { Language, Person  } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";


const pages = [
    {
        nome: 'Home',
        link: "/"
    },{
        nome: 'Como funciona',
        link: "/comoFunciona"
    },
    {
        nome: "Blog",
        link: "/blog"
    },
    {
        nome: 'Sobre nós',
        link:"/sobreNos"
    }
    ];
const settings = [
    {
    nome: 'Login',
    link: "/login"
    },
    {
    nome:'Criar Conta',
    link:"/criarConta"
}];

export function BarraDeNavegacao(){

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return(

    <AppBar position="fixed" sx={{bgcolor: "#000"}} >

        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
                <Image  src="/logo.png" width={25} height={25}/>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Filha Boa
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}

               
                >

                        <MenuIcon sx={{color :grey[100]}}  />
                
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
                {pages.map((page, pos) => (
                    <MenuItem key={pos} onClick={handleCloseNavMenu}  >
                        <Button textAlign="center"  href={page.link}>{page.nome} </Button>
                    </MenuItem>
                ))
                }
                </Menu>

            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
                <Image  src="/logo.png" width={25} height={25}/>
            </Box>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                FilhaBoa
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, pos) => (
                <Button
                    key={pos}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    color='white'
                    href={page.link}
                >
                    {page.nome}
                </Button>
                ))}
            </Box>


            <Box sx={{flexGrow:1}}>
                <Button variant="contained" href="/apadrinhar" sx={{borderRadius: 0}}>
                    Apadrinhar
                </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display:{xs :"block", lg:"block"}, mx:6 }}>
                <Tooltip title="Entrar">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                    <Avatar sx={{ bgcolor:grey[900] }}>
                        <Language />
                    </Avatar>
                    <Typography variant='button' sx={{color:"white.main", ml:1}}>Pt-Br</Typography>
                </IconButton>
                </Tooltip>

                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                    <Button  href={setting.link}>{setting.nome}</Button>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display:{xs :"block", lg:"none"} }}>
                <Tooltip title="Entrar">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                    <Avatar sx={{ bgcolor:"black" }}>
                        <Person />
                    </Avatar>
                </IconButton>
                </Tooltip>

                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                        <Button href={setting.link}>{setting.nome}</Button>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display:{xs :"none", lg:"flex", } }}>
                <Button variant='outlined' color='white' sx={{mx:2, borderRadius:0}} href="/login">
                    Entrar
                </Button>

                <Button variant='outlined' color='white' sx={{mx:2, borderRadius:0}} href="/criarConta">
                    Criar Conta
                </Button>
            </Box>
            </Toolbar>
        </Container>
    </AppBar>

    )
}