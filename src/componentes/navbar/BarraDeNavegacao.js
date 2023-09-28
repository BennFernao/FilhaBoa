"use client"
import * as React from "react"
import {AppBar, Container, Toolbar, Box,Typography,  IconButton, Menu, MenuItem,Avatar, Button, Tooltip, Grid } from "@mui/material"
import { grey } from "@mui/material/colors";
import { Language, Person  } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";


import Image from "next/image";


const pages = [
    {
        nome: 'Home',
        link: "/"
    },{
        nome: 'Funcionamento',
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
    }];


const linguas = [
    {
    nome: 'Portugues',
    link: "/",
    srcImagemRepresentativa : "/portugal.png"
    },
    {
    nome:'Inglês',
    link:"/",
    srcImagemRepresentativa : "/english.png"
}];

export function BarraDeNavegacao({children}){


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [menuLinguaAberto, setMenuLinguaAberto] = React.useState(null)
  
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


    const handleOpenUserMenuLanguage = (event) => {
        setMenuLinguaAberto(event.currentTarget);
      };
    
      const handleCloseUserMenuLanguage = () => {
        setMenuLinguaAberto(null);
      };



    return(

    <Grid container   >  

        <AppBar  sx={{bgcolor: "#000"}} >

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
                    fontWeight: 600,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    marginRight: 10
                    }}
                >
                    Filha Boa
                </Typography>


                {
                    // opçoes de paginas para dispositivos pequenos
                }

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

                
                {
                    // Paginas para ecras maiores
                }
                <Box sx={{flexGrow:1,  display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, pos) => (
                    <Button
                        key={pos}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, mx:1,color: 'white', display: 'block' }}
                        color='white'
                        href={page.link}
                    >
                        {page.nome}
                    </Button>
                    ))}
                </Box>




                <Box sx={{ flexGrow: 0, display:{xs :"block", lg:"block"}, mx:6 }}>
                    <Tooltip title="Mudar a lingua">
                    <IconButton onClick={handleOpenUserMenuLanguage} sx={{ p: 0}}>
                        <Avatar sx={{ bgcolor:grey[900] }}>
                            <Language />
                        </Avatar>
                        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  ml:1}}>
                            <Image src="/portugal.png" width={20} height={20} alt="Alterar para portugues"/>
                            <Typography variant='button' sx={{color:"white.main", ml:1}}>Pt-Br</Typography>
                        </Box>
                    </IconButton>
                    </Tooltip>

                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={menuLinguaAberto}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(menuLinguaAberto)}
                    onClose={handleCloseUserMenuLanguage}
                    >
                    {linguas.map((lingua, pos) => (
                        <MenuItem key={lingua} onClick={handleCloseUserMenuLanguage}  >

                            <Image src={lingua.srcImagemRepresentativa}  width={20} height={20} alt={lingua.nome}/>
                            <Button  href={lingua.link}>{lingua.nome}</Button>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>


                {
                    // Login para telas menores
                }

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

                    {children}



                </Toolbar>
            </Container>
        </AppBar>

    </Grid>

    )
}
