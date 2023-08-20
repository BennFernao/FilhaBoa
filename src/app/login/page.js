"use client"


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormGroup, Grid, Box } from '@mui/material';
import Image from 'next/image';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '400px',
  },
};


const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : "#0D0D0D", contrastText :"#212121"},
        subtitle : {main : grey[700]}
  
        
    }
  })

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (



    <ThemeProvider theme={theme}>


    <Grid container >
        <Grid container item md={4} sx={{display:{xs:"none", md:"flex"}, bgcolor:grey[900]}}>

            <Box  mt={20} p={4}>

                <Container sx={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <Image  src="/logo.png" width={45} height={45}/>
                </Container>
                
                <Typography variant="h4" color={grey[100]} mt={4} sx={{textAlign:"center"}} >
                    Contamos contigo !
                </Typography>

                <Typography sx={{fontWeight:"700"}} mt={4} color={grey[400]}>
                    Contamos contigo meu amigo/a, estamos fazendo as melhores coisas que estao ao nosso alcançe e efetivar o mundo de modo nunca antes visto
                </Typography>


            </Box>


        </Grid>

        <Grid container item  md={8}>
            <Container sx={{...styles.container}}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
                Login
            </Typography>
            <FormGroup sx={{...styles.form}} >
                <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" size='large' onClick={handleLogin}>
                Entrar
                </Button>
                <Button variant="text" color="primary" href='/criarConta'>
                Não tem uma conta ? Crie uma!
                </Button>
            </FormGroup>
            </Container>
        </Grid>
    </Grid>

    </ThemeProvider>
  );
};

export default LoginPage;
